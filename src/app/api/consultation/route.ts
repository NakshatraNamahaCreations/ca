import { NextResponse } from "next/server";
import { consultationServices } from "@/data/site";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

function isValidPhone(value: string) {
  return /^(\+?91)?[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ""));
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function reference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `RCS-${stamp}${rand}`;
}

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const service = (body.service ?? "").trim();

  const errors: string[] = [];
  if (name.length < 2) errors.push("name");
  if (!isValidPhone(phone)) errors.push("phone");
  if (!isValidEmail(email)) errors.push("email");
  if (!consultationServices.includes(service)) errors.push("service");

  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  const enquiry = {
    reference: reference(),
    receivedAt: new Date().toISOString(),
    name,
    phone,
    email,
    service,
    message: (body.message ?? "").slice(0, 2000),
  };

  // Persist / notify here: database insert, CRM webhook, email or WhatsApp API.
  // Left as a log so the form works end to end out of the box.
  console.log("[consultation]", enquiry);

  return NextResponse.json(
    { ok: true, reference: enquiry.reference },
    { status: 201 }
  );
}
