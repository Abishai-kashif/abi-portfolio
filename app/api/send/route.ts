import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { from, subject, text, html } = await req.json();
		
    await transporter.sendMail({
      from: `${subject} - ${from}`,
      to: `${process.env.EMAIL_USER}>`, // sending email to myself.
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
