import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const form = await req.formData()

    const name = form.get("name")?.toString() || ""
    const email = form.get("email")?.toString() || ""
    const phone = form.get("phone")?.toString() || ""
    const message = form.get("message")?.toString() || ""
    const jobTitle = form.get("jobTitle")?.toString() || ""

    if (!name || !email || !jobTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Handle CV attachment
    const cv = form.get("cv") as File | null
    const attachments: any[] = []

    if (cv && typeof cv !== "string") {
      const arrayBuffer = await cv.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachments.push({
        filename: (cv as any).name || "cv.pdf",
        content: buffer,
      })
    }

    //  Gmail transporter with App Password + TLS fix
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // Gmail address
        pass: process.env.SMTP_PASS, // 16-digit App Password
      },
      tls: {
        rejectUnauthorized: false, //  bypass self-signed cert issue
      },
      logger: true, // debug logs
      debug: true,
    })

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER

    const mailOptions = {
      from: `"KundKundIT Careers" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New application for ${jobTitle}`,
      text: `
New application received

Name: ${name}
Email: ${email}
Phone: ${phone}
Applied for: ${jobTitle}

Message:
${message}
      `,
      attachments,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error(" Error in /api/apply:", err?.message || err)
    return NextResponse.json(
      { error: "Failed to submit application", details: err?.message || err },
      { status: 500 }
    )
  }
}
