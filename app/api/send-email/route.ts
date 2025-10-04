import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, project } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // -----------------------
    // Message to Admin
    // -----------------------
    const adminMessage = `
New Free Consultation Request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Details: ${project}
    `;

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`, //fixed
      to: process.env.TO_EMAIL, //  admin only
      subject: `New Free Consultation from ${name}`,
      text: adminMessage,
      replyTo: email, //  lets admin reply directly to user
    });

    // -----------------------
    // Auto-response to Sender
    // -----------------------
    const senderMessage = `
Hi ${name},

Thank you for requesting a free consultation!  
Our team has received your details and will get back to you shortly.

Here’s a copy of what you submitted:
--------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Project Details: ${project}
--------------------------------------

Best regards,  
The Admin Team
    `;

    await transporter.sendMail({
      from: `"Admin Team" <${process.env.SMTP_USER}>`, // always your Gmail
      to: email, //  goes to the user
      subject: "We received your Free Consultation request",
      text: senderMessage,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in send-consultation route:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
