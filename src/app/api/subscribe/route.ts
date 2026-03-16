import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Audience ID from Resend dashboard — create an audience called "Finnish Sauna Guide"
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

export async function POST(request: NextRequest) {
  try {
    const { email, leadMagnet } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const resend = getResend();

    // Add contact to Resend audience
    if (AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
        firstName: "",
        lastName: "",
      });
    }

    // Send welcome email
    await resend.emails.send({
      from: "Finnish Sauna Guide <hello@finnishsaunaguide.com>",
      to: email,
      subject: "Welcome to Finnish Sauna Guide!",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h1 style="color: #8b4513;">Welcome to Finnish Sauna Guide</h1>
          <p>Thank you for signing up! You requested: <strong>${leadMagnet || "newsletter"}</strong></p>
          <p>As a Finn, I am excited to share our 2,000-year-old sauna tradition with you. Here is what you can expect:</p>
          <ul>
            <li>Weekly sauna tips and cultural insights</li>
            <li>Honest accessory reviews and recommendations</li>
            <li>New country guides as we publish them</li>
          </ul>
          <p>In the meantime, check out our most popular guides:</p>
          <ul>
            <li><a href="https://finnishsaunaguide.com/sauna-etiquette/first-time" style="color: #2c5f7c;">Your First Finnish Sauna</a></li>
            <li><a href="https://finnishsaunaguide.com/sauna-accessories" style="color: #2c5f7c;">Essential Sauna Accessories</a></li>
            <li><a href="https://finnishsaunaguide.com/best-saunas" style="color: #2c5f7c;">Best Saunas in the World</a></li>
          </ul>
          <p style="color: #6b6b6b; font-size: 14px; margin-top: 30px;">
            You are receiving this because you signed up at finnishsaunaguide.com.<br/>
            <a href="https://finnishsaunaguide.com" style="color: #2c5f7c;">Finnish Sauna Guide</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
