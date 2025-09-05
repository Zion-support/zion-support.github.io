<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server",
import { getServerSession } from "next-auth",
import { prisma } from "@/lib/prisma",
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(),
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Update user's onboarding status
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { onboardingCompleted: true }}),
=======

export async function POST(_request: NextRequest) {_try {
    const _session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized"},
        {_status: 401}
      );
    }

    // Update user's onboarding status
    const _updatedUser = await prisma.user.update({_where: { email: session.user.email},
      data: {_onboardingCompleted: true}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return NextResponse.json(
      {_message: "Onboarding completed successfully", _user: {
          id: updatedUser.id, _name: updatedUser.name, _email: updatedUser.email, _role: updatedUser.role, _onboardingCompleted: updatedUser.onboardingCompleted}
      },
<<<<<<< HEAD
      { status: 200 }
    )
  } catch (error) {
    console.error("Onboarding completion error:", error),
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
=======
      {_status: 200}
    );
  } catch (error) {_return NextResponse.json(
      { error: "Internal server error"},
      {_status: 500}
    );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}