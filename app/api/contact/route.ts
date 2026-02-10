import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Zod schema for contact form validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters")
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f7;">
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
    // Parse JSON body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
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

    const { name, email } = result.data;

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
      subject: `New Message from ${name} - Portfolio Contact`,
      text: generateEmailText(result.data),
      html: generateEmailHTML(result.data),
    };

    await transporter.sendMail(mailOptions);

    console.log("Contact form email sent:", {
      name,
      email,
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
