import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({} as any));
    const { userId, name, email, role, preferences } = body || {};

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: {
          id: userId ?? "anonymous",
          name: name ?? "",
          email: email ?? "",
          role: role ?? "user",
          onboardingCompleted: true,
          preferences: preferences ?? {},
        },
      },
      { status: 200 }
    );
  } catch (_error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}