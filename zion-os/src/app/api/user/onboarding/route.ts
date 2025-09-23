import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId, preferences } = await request.json();

    const updatedUser = {
      id: userId ?? "unknown",
      name: "User",
      email: "user@example.com",
      role: "user",
      onboardingCompleted: true,
      preferences: preferences ?? {},
    };

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          onboardingCompleted: updatedUser.onboardingCompleted,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
