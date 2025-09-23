import { NextResponse } from "next/server";

export async function POST() {
  // Mock success response for onboarding completion
  return NextResponse.json(
    { message: "Onboarding completed successfully" },
    { status: 200 }
  );
}

