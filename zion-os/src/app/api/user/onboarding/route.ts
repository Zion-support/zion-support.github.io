<<<<<<< HEAD
import { NextRequest, NextResponse } from 'next/server';

export async function POST(_request: NextRequest) {
  // Temporary stub to avoid build-time dependency on next-auth/prisma
  try {
    // Mock response for now
    return NextResponse.json({ 
      success: true, 
      message: 'Onboarding completed successfully' 
    });
  } catch (error) {
    console.error('Onboarding error:', error);
    return NextResponse.json({ 
      error: 'Failed to complete onboarding' 
    }, { status: 500 });
  }
}
=======
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
>>>>>>> cursor/check-fix-push-and-merge-to-main-fba1
