import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, email, name, preferences } = body || {};

    if (!email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updatedUser = {
      id: userId || "mock-user-id",
      name: name || "User",
      email,
      role: "user",
      onboardingCompleted: true,
      preferences: preferences || {},
    };

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Onboarding completion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
