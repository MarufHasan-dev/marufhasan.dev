import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateContactForm(data: unknown): {
  isValid: boolean;
  errors: ValidationError[];
  sanitizedData?: ContactFormData;
} {
  const errors: ValidationError[] = [];

  // Check if data is an object
  if (!data || typeof data !== "object") {
    return {
      isValid: false,
      errors: [{ field: "body", message: "Invalid request body" }],
    };
  }

  const { name, email, message } = data as Record<string, unknown>;

  // Validate name
  if (!name || typeof name !== "string") {
    errors.push({ field: "name", message: "Name is required" });
  } else if (name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Name must be at least 2 characters",
    });
  } else if (name.trim().length > 100) {
    errors.push({
      field: "name",
      message: "Name must be less than 100 characters",
    });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string") {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!emailRegex.test(email.trim())) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  } else if (email.trim().length > 254) {
    errors.push({
      field: "email",
      message: "Email must be less than 254 characters",
    });
  }

  // Validate message
  if (!message || typeof message !== "string") {
    errors.push({ field: "message", message: "Message is required" });
  } else if (message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters",
    });
  } else if (message.trim().length > 5000) {
    errors.push({
      field: "message",
      message: "Message must be less than 5000 characters",
    });
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    sanitizedData: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      message: (message as string).trim(),
    },
  };
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
        { status: 400 }
      );
    }

    // Validate the form data
    const validation = validateContactForm(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.sanitizedData!;

    // In a production environment, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Send a notification to Slack/Discord
    // 4. Add rate limiting to prevent spam

    // For now, we'll log the message and return success
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate a small delay (like sending an email would have)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to submit the contact form." },
    { status: 405 }
  );
}
