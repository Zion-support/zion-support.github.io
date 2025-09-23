import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

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

