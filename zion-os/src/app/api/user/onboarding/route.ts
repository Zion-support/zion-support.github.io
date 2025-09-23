import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({} as any));

    const user = {
      id: body?.userId ?? "mock-user-id",
      name: body?.name ?? "John Doe",
      email: body?.email ?? "john@example.com",
      role: body?.role ?? "user",
      onboardingCompleted: true,
      preferences: body?.preferences ?? {},
    };

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user,
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
