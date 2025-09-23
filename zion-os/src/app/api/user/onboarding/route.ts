import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

<<<<<<< HEAD
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Update user's onboarding status
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { onboardingCompleted: true },
    });

    return NextResponse.json(
      { 
        message: "Onboarding completed successfully",
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          onboardingCompleted: updatedUser.onboardingCompleted,
        }
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
