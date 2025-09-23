import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  try {
    // Stubbed success response; integrate with auth/db in production
    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: {
          id: "stub-user",
          name: "Stub User",
          email: "stub@example.com",
          role: "user",
          onboardingCompleted: true,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}