import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

// ============================================
// FILL IN YOUR GMAIL CREDENTIALS BELOW
// ============================================
const GMAIL_ADDRESS = "jishnuprakasharullil@gmail.com" // <-- Replace with your Gmail
const GMAIL_APP_PASSWORD = "trdi gnuq wlic xglc" // <-- Replace with your Gmail App Password
// ============================================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_ADDRESS,
    pass: GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_ADDRESS}>`,
      to: 'jishnuprakash469@gmail.com',
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f1419; border-radius: 12px; overflow: hidden; border: 1px solid #1e2a35;">
          <div style="background: linear-gradient(135deg, #0d9488, #14b8a6); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Someone reached out through your portfolio</p>
          </div>
          <div style="padding: 32px 24px;">
            <div style="margin-bottom: 24px; padding: 16px; background: #1a2332; border-radius: 8px; border-left: 3px solid #14b8a6;">
              <p style="color: #8b9cb6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">From</p>
              <p style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0;">${name}</p>
            </div>
            <div style="margin-bottom: 24px; padding: 16px; background: #1a2332; border-radius: 8px; border-left: 3px solid #14b8a6;">
              <p style="color: #8b9cb6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Email</p>
              <p style="color: #e2e8f0; font-size: 16px; margin: 0;"><a href="mailto:${email}" style="color: #14b8a6; text-decoration: none;">${email}</a></p>
            </div>
            <div style="padding: 16px; background: #1a2332; border-radius: 8px; border-left: 3px solid #14b8a6;">
              <p style="color: #8b9cb6; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">Message</p>
              <p style="color: #e2e8f0; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #0a0f14; text-align: center; border-top: 1px solid #1e2a35;">
            <p style="color: #4a5568; font-size: 12px; margin: 0;">Sent from your portfolio contact form</p>
          </div>
        </div>
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
