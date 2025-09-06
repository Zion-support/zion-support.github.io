import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession($2);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401}
      )
    }

    // Update user's onboarding status
    const updatedUser = await prisma.user.update($2);
    return NextResponse.json(
      { 
        message: "Onboarding completed successfully",
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          onboardingCompleted: updatedUser.onboardingCompleted}
      },
      { status: 200}
    )
  } catch (error) {
    console.error($2);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500}
    )
  }
}