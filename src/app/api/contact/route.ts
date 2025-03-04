import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const verifiedEmail = process.env.VERIFIED_EMAIL_FROM || "";
const recipientEmail = process.env.SENT_EMAIL_TO || "";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { fullName, email, message }: FormData = await request.json();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: verifiedEmail,
      to: recipientEmail,
      subject: "New Message from Your Portfolio Website",
      html: `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
          }
          .content {
            padding: 20px;
          }
          .content h2 {
            font-size: 20px;
            color: #444;
            margin-bottom: 15px;
          }
          .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
          }
          .message-box {
            background: #f8f8f8;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #2575fc;
          }
          .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #2575fc;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            transition: background 0.3s ease;
          }
          .button:hover {
            background: #1a5bbf;
          }
          .footer {
            text-align: center;
            padding: 15px;
            font-size: 14px;
            color: #777;
            background: #f1f1f1;
          }
          .footer a {
            color: #2575fc;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <!-- Header -->
          <div class="header">
            <h1>📩 New Message from Your Portfolio</h1>
          </div>

          <!-- Content -->
          <div class="content">
            <h2>Hello,</h2>
            <p>You've received a new message from your portfolio website. Here are the details:</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div class="message-box">
              <p>${message}</p>
            </div>
            <div class="button">Reply to ${fullName}</div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p>This email was sent via the contact form on <a href="https://sahedul.me">your portfolio website</a>.</p>
          </div>
        </div>
      </body>
    </html>

  `,
      text: `Hello,

                You've received a new message from your portfolio website. Here are the details:
                
                Name: ${fullName}
                Email: ${email}
                Message:
                ${message}
                
                ---
                
                This email was sent via the contact form on your portfolio website: https://sahedul.me`,
    });

    if (response.error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred while processing your request",
        errorDetails: error,
      },
      { status: 500 }
    );
  }
}
