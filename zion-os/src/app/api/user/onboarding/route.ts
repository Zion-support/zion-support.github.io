import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({} as any));
    const { userId, preferences } = body || {};

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: {
          id: userId ?? "anonymous",
          name: body?.name ?? "",
          email: body?.email ?? "",
          role: body?.role ?? "user",
          onboardingCompleted: true,
          preferences: preferences ?? {}
        }
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