import { NextRequest, NextResponse } from "next/server";

<<<<<<< HEAD
export async function POST(request: NextRequest) {
	try {
		const body = await request.json().catch(() => ({} as any));
		const userId = body?.userId ?? "anonymous";
		const preferences = body?.preferences ?? {};

		return NextResponse.json(
			{
				message: "Onboarding completed successfully",
				user: {
					id: userId,
					name: body?.name ?? "",
					email: body?.email ?? "",
					role: body?.role ?? "user",
					onboardingCompleted: true,
					preferences,
				},
			},
			{ status: 200 }
		);
	} catch (_error) {
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}
=======
// Mock onboarding completion endpoint (removes next-auth/prisma requirements)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({} as any));
    const { userId = "local-user" } = (body as any) || {};

    const updatedUser = {
      id: String(userId),
      onboardingCompleted: true,
    };

    return NextResponse.json(
      {
        message: "Onboarding completed successfully",
        user: updatedUser,
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
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047
