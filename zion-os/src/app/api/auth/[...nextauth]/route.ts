import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "auth temporarily disabled" }, { status: 200 });
}

export function POST() {
  return NextResponse.json({ status: "auth temporarily disabled" }, { status: 200 });
}
