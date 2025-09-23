import { NextRequest, NextResponse } from "next/server";
<<<<<<< HEAD
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

<<<<<<< HEAD
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

>>>>>>> 45bde326a2e7 (fix(zion-os): repair corrupted pages, add path alias, implement minimal onboarding route; fix signin/signup/dashboard pages; clean homepage duplicates; build zion-website and zion-ai-assistant)
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
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0309
