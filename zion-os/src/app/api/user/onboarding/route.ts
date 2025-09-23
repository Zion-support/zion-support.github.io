import { NextRequest, NextResponse } from "next/server";

// Mock onboarding completion endpoint (removes next-auth/prisma requirements)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({} as any));
    const { userId = "local-user" } = (body as any) || {};

    const updatedUser = {
      id: String(userId),
      onboardingCompleted: true,
    };

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: updatedUser,
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