import RequestEmail from "@/app/emails/requestOfferte";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, address, postcode, serviceType } =
      body;
    const data = await resend.emails.send({
      from: "request <onboarding@resend.dev>",
      to: ["noordermultidiensten@gmail.com"],
      subject: "New Offerte",
      react: RequestEmail({
        name: name,
        email: email,
        phone: phone,
        message: message,
        address: address,
        postcode: postcode,
        serviceType: serviceType,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
