import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "Onboarding completed successfully",
      user: {
        id: "mock",
        name: "Mock User",
        email: "mock@example.com",
        role: "user",
        onboardingCompleted: true,
      },
    },
    { status: 200 }
  );
}
