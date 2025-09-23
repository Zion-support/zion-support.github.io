import { NextRequest, NextResponse } from "next/server";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json().catch(() => ({} as any));
		const userId = body?.userId ?? 'anonymous';
		const preferences = body?.preferences ?? {};

		return NextResponse.json(
			{
				message: 'Onboarding completed successfully',
				user: {
					id: userId,
					onboardingCompleted: true,
					preferences,
				},
			},
			{ status: 200 }
		);
	} catch (_error) {
		return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
	}
}

=======

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
=======

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
