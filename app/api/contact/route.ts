import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const MAX_REQUEST_BYTES = 10_000;

const allowedTurnstileHostnames = new Set(
  (process.env.CONTACT_ALLOWED_HOSTNAMES ?? "marufhasan.dev,localhost,127.0.0.1")
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean),
);

// Keep validation authoritative on the server. Trim before checking lengths so
// whitespace cannot satisfy required-field or minimum-length checks.
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .refine((value) => !/[\u0000-\u001f\u007f-\u009f]/.test(value), {
      message: "Name contains invalid characters",
    }),
  email: z
    .string()
    .trim()
    .max(254, "Email must be less than 254 characters")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
  turnstileToken: z
    .string()
    .min(1, "Complete the security check")
    .max(2048, "Invalid security token")
    .trim(),
});

type ContactFormData = z.infer<typeof contactSchema>;

async function verifyTurnstileToken(
  token: string,
  secret: string,
) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
      signal: AbortSignal.timeout(10_000),
    },
  );

  if (!response.ok) {
    throw new Error(`Turnstile Siteverify returned ${response.status}`);
  }

  const result: {
    success?: boolean;
    action?: string;
    hostname?: string;
  } = await response.json();

  return (
    result.success === true &&
    result.action === "contact" &&
    typeof result.hostname === "string" &&
    allowedTurnstileHostnames.has(result.hostname.toLowerCase())
  );
}

async function readJsonBody(request: NextRequest): Promise<unknown> {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim();
  if (contentType !== "application/json") {
    throw new TypeError("Expected application/json");
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    throw new RangeError("Request body is too large");
  }

  if (!request.body) {
    throw new TypeError("Request body is empty");
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      throw new RangeError("Request body is too large");
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body));
}

// Create email transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_SMTP_PORT),
    secure: process.env.MAIL_SMTP_SECURE === "true",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
}

// Generate HTML email template
function generateEmailHTML(data: ContactFormData): string {
  const { name, email, message } = data;
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f7;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1d1d1f 0%, #333333 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                New Message Received
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.7); font-size: 14px;">
                Portfolio Contact Form
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Sender Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f7; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="60" valign="top" style="text-align: center;">
                          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #0a84ff 0%, #0066cc 100%); border-radius: 50%; text-align: center; line-height: 48px; color: #ffffff; font-size: 20px; font-weight: 600;">
                            ${name.charAt(0).toUpperCase()}
                          </div>
                        </td>
                        <td valign="middle" style="padding-left: 16px;">
                          <p style="margin: 0; font-size: 18px; font-weight: 600; color: #1d1d1f;">
                            ${escapeHtml(name)}
                          </p>
                          <a href="mailto:${escapeHtml(email)}" style="margin: 4px 0 0 0; font-size: 14px; color: #0a84ff; text-decoration: none;">
                            ${escapeHtml(email)}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 600; color: #6e6e73; text-transform: uppercase; letter-spacing: 0.5px;">
                  Message
                </p>
                <div style="background-color: #fafafa; border-left: 4px solid #0a84ff; padding: 20px; border-radius: 0 8px 8px 0;">
                  <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1d1d1f; white-space: pre-wrap;">
${escapeHtml(message)}
                  </p>
                </div>
              </div>
              
              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=Re: Your message from the portfolio" 
                       style="display: inline-block; background: linear-gradient(135deg, #0a84ff 0%, #0066cc 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 980px; font-size: 16px; font-weight: 500; letter-spacing: -0.2px;">
                      Reply to ${escapeHtml(name.split(" ")[0])}
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f7; padding: 24px 40px; border-top: 1px solid #e5e5ea;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 13px; color: #6e6e73;">
                      📅 ${date}
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin: 0; font-size: 13px; color: #6e6e73;">
                      Sent via Portfolio Contact Form
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
        
        <!-- Footer Text -->
        <p style="margin: 24px 0 0 0; font-size: 12px; color: #6e6e73; text-align: center;">
          This email was sent from your portfolio website contact form.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// Generate plain text version
function generateEmailText(data: ContactFormData): string {
  const { name, email, message } = data;
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
NEW CONTACT FORM SUBMISSION
============================

From: ${name}
Email: ${email}
Date: ${date}

MESSAGE:
--------
${message}

---
Reply to this email to respond directly to ${name}.
  `.trim();
}

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

export async function POST(request: NextRequest) {
  try {
    // Reject unexpected media types and cap bytes before parsing untrusted JSON.
    let body: unknown;
    try {
      body = await readJsonBody(request);
    } catch (error) {
      if (error instanceof RangeError) {
        return NextResponse.json(
          { error: "Request body is too large" },
          { status: 413 },
        );
      }
      return NextResponse.json(
        { error: "Expected a valid JSON request body" },
        { status: 400 },
      );
    }

    // Validate with Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json(
        {
          error: "Validation failed",
          details: errors,
        },
        { status: 400 },
      );
    }

    const { email, turnstileToken } = result.data;

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("Turnstile secret key is not configured");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 },
      );
    }

    let turnstileVerified: boolean;
    try {
      turnstileVerified = await verifyTurnstileToken(
        turnstileToken,
        turnstileSecret,
      );
    } catch (error) {
      console.error("Turnstile verification is unavailable:", error);
      return NextResponse.json(
        { error: "Security verification is unavailable. Please try again." },
        { status: 503 },
      );
    }

    if (!turnstileVerified) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 403 },
      );
    }

    // Check if email credentials are configured
    if (
      !process.env.MAIL_USERNAME ||
      !process.env.MAIL_PASSWORD ||
      !process.env.MAIL_HOST
    ) {
      console.error("Email configuration missing");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 },
      );
    }

    // Create transporter and send email
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MAIL_USERNAME}>`,
      to: "marufdev.contact@gmail.com",
      replyTo: email,
      subject: "New portfolio contact form message",
      text: generateEmailText(result.data),
      html: generateEmailHTML(result.data),
    };

    await transporter.sendMail(mailOptions);

    console.log("Contact form email sent", {
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to submit the contact form." },
    { status: 405 },
  );
}
