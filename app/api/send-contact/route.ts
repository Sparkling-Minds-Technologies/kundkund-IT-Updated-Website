import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, project } = await req.json() // ✅ project

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    })

    // Message to Admin
    const adminMessage = `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Project Details: ${project}
    `

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New contact form message from ${name}`,
      text: adminMessage,
      replyTo: email,
    })

    // Auto-response to Sender
    const senderMessage = `
Hi ${name},

Thank you for contacting us! ✅  
We’ve received your message and our team will get back to you soon.

Here’s a copy of your submission:
--------------------------------------
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Project Details: ${project}
--------------------------------------

Best regards,  
The Admin Team
    `

    await transporter.sendMail({
      from: `"Admin" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message ✅",
      text: senderMessage,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("Error in send-contact route:", error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
