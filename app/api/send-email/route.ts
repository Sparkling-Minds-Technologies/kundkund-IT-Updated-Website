import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, project } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // 👈 fixes "self-signed certificate" error
      },
    });

    // formatted email body
    const emailText = `
Name: ${name}

Email: ${email}

Phone: ${phone}

Project Details: ${project}
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: emailText,
      replyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error("Error in send-email route:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
