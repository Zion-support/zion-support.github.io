import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  // Temporary stub to avoid build-time dependency on next-auth/prisma
  return NextResponse.json(
    {
      message: "Onboarding completed successfully",
      user: {
        id: "stub",
        name: "Stub User",
        email: "stub@example.com",
        role: "user",
        onboardingCompleted: true,
      },
    },
    { status: 200 }
  );
}
