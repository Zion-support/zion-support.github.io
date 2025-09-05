<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server",;
import { getServerSession } from "next-auth",;
import { prisma } from "@/lib/prisma",;
;
export async function POST(request:NextRequest) {;
  try {;
    const session = await getServerSession(),;
    ;
    if (!session?.user?.email) {;
      return NextResponse.json(;
        { error:"Unauthorized" },;
        { status:401 }
      ),;
    }
;
    // Update user's onboarding status;
    const updatedUser = await prisma.user.update({;
      where:{ email:session.user.email },;
      data:{ onboardingCompleted:true }}),;
;
    return NextResponse.json(;
      { ;
        message:"Onboarding completed successfully",;
        user:{;
          id:updatedUser.id,;
          name:updatedUser.name,;
          email:updatedUser.email,;
          role:updatedUser.role,;
          onboardingCompleted:updatedUser.onboardingCompleted}
      },;
      { status:200 }
    ),;
  } catch (error) {;
    console.error("Onboarding completion error:", error),;
    return NextResponse.json(;
      { error:"Internal server error" },;
      { status:500 }
    ),;
  }
=======
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
    return NextResponse.json(
      {_message: "Onboarding completed successfully", _user: {
          id: updatedUser.id, _name: updatedUser.name, _email: updatedUser.email, _role: updatedUser.role, _onboardingCompleted: updatedUser.onboardingCompleted}
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Onboarding completion error:", error),
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}