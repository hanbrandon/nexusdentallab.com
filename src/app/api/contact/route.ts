import { NextResponse } from "next/server";

const businessEmail = "nexusdentalab@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Internal server error. Mail service configuration missing." },
        { status: 500 }
      );
    }

    // Brevo API Request Body
    const requestBody = {
      sender: {
        name: "Nexus Dental Lab Web Contact",
        email: businessEmail, // This must be a verified sender/domain in Brevo
      },
      to: [
        {
          email: businessEmail, // Destination recipient email
          name: "Nexus Dental Lab Admin",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `[Web Inquiry] ${subject || "New Partnership Inquiry"}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: sans-serif; line-height: 1.6; color: #263143; }
            .container { padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; margin: 0 auto; }
            h2 { color: #ff6716; border-bottom: 2px solid #ff6716; padding-bottom: 10px; margin-top: 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; font-size: 14px; color: #0c1324; }
            .value { margin-top: 5px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; border: 1px solid #edf2f7; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Inquiry from Nexus Dental Lab Website</h2>
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${subject || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email via Brevo." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
