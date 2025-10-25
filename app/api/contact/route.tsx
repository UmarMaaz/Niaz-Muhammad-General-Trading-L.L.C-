import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, country, subject, message } = body

    // Validate required fields
    if (!name || !email || !country || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Here you would integrate with your email service
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      country,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'info@niazminerals.com',
    //   from: 'noreply@niazminerals.com',
    //   subject: `New Contact Form Submission: ${subject}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Country: ${country}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
