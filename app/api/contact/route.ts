
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

// ============================================
// GMAIL CONFIGURATION
// ============================================

const GMAIL_ADDRESS = "jishnuprakasharullil@gmail.com" // <-- Replace with your Gmail
const GMAIL_APP_PASSWORD = "trdi gnuq wlic xglc" // <-- Replace with your Gmail App Password

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_ADDRESS,
    pass: GMAIL_APP_PASSWORD,
  },
})

// ============================================
// HTML ESCAPING
// ============================================
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }

    return entities[char]
  })
}

// ============================================
// CONTACT API
// ============================================
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Sanitize user-submitted content
    const safeName = escapeHtml(name.trim())
    const safeEmail = escapeHtml(email.trim())
    const safeMessage = escapeHtml(message.trim())

    // ============================================
    // SEND EMAIL
    // ============================================
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_ADDRESS}>`,
      to: "jishnuprakash469@gmail.com",
      replyTo: email.trim(),
      subject: `New Contact Message from ${name.trim()}`,

      // Plain-text fallback
      text: `
New Portfolio Contact Message

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

---
Sent from your portfolio contact form.
      `.trim(),

      // ============================================
      // PROFESSIONAL MINIMAL EMAIL TEMPLATE
      // ============================================
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0" />
            <title>New Contact Message</title>
          </head>

          <body style="
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            font-family: Arial, Helvetica, sans-serif;
            color: #111111;
          ">

            <table
              role="presentation"
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              style="background-color: #f7f7f7;"
            >
              <tr>
                <td align="center" style="padding: 40px 16px;">

                  <table
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                    style="
                      max-width: 560px;
                      background-color: #ffffff;
                      border: 1px solid #e8e8e8;
                    "
                  >

                    <!-- HEADER -->
                    <tr>
                      <td style="padding: 32px 32px 24px;">

                        <p style="
                          margin: 0 0 20px;
                          font-size: 14px;
                          font-weight: 700;
                          letter-spacing: 1px;
                          color: #111111;
                        ">
                          JISHNU<span style="color: #6258f5;">.</span>
                        </p>

                        <h1 style="
                          margin: 0 0 10px;
                          font-size: 25px;
                          line-height: 1.3;
                          font-weight: 700;
                          color: #111111;
                        ">
                          New Contact Message
                        </h1>

                        <p style="
                          margin: 0;
                          color: #777777;
                          font-size: 14px;
                          line-height: 1.6;
                        ">
                          You've received a new message from
                          your portfolio website.
                        </p>

                      </td>
                    </tr>

                    <!-- DIVIDER -->
                    <tr>
                      <td style="padding: 0 32px;">
                        <div style="
                          height: 2px;
                          background-color: #6258f5;
                        "></div>
                      </td>
                    </tr>

                    <!-- CONTACT INFORMATION -->
                    <tr>
                      <td style="padding: 28px 32px 8px;">

                        <p style="
                          margin: 0 0 8px;
                          font-size: 11px;
                          font-weight: 700;
                          letter-spacing: 1.2px;
                          text-transform: uppercase;
                          color: #888888;
                        ">
                          Name
                        </p>

                        <p style="
                          margin: 0 0 24px;
                          font-size: 16px;
                          font-weight: 600;
                          color: #111111;
                        ">
                          ${safeName}
                        </p>

                        <p style="
                          margin: 0 0 8px;
                          font-size: 11px;
                          font-weight: 700;
                          letter-spacing: 1.2px;
                          text-transform: uppercase;
                          color: #888888;
                        ">
                          Email Address
                        </p>

                        <p style="
                          margin: 0 0 24px;
                          font-size: 15px;
                          line-height: 1.6;
                          overflow-wrap: anywhere;
                        ">
                          <a
                            href="mailto:${safeEmail}"
                            style="
                              color: #6258f5;
                              text-decoration: none;
                            "
                          >
                            ${safeEmail}
                          </a>
                        </p>

                      </td>
                    </tr>

                    <!-- MESSAGE -->
                    <tr>
                      <td style="padding: 0 32px 32px;">

                        <p style="
                          margin: 0 0 12px;
                          font-size: 11px;
                          font-weight: 700;
                          letter-spacing: 1.2px;
                          text-transform: uppercase;
                          color: #888888;
                        ">
                          Message
                        </p>

                        <div style="
                          padding: 20px;
                          background-color: #f8f8f8;
                          border-left: 3px solid #6258f5;
                        ">
                          <p style="
                            margin: 0;
                            font-size: 14px;
                            line-height: 1.8;
                            color: #333333;
                            white-space: pre-wrap;
                            overflow-wrap: anywhere;
                          ">${safeMessage}</p>
                        </div>

                      </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                      <td style="
                        padding: 20px 32px;
                        border-top: 1px solid #eeeeee;
                      ">

                        <p style="
                          margin: 0;
                          font-size: 12px;
                          line-height: 1.6;
                          color: #999999;
                          text-align: center;
                        ">
                          Sent from Jishnu's Portfolio Website
                        </p>

                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send email:", error)

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
