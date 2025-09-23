import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({} as any));
    
    // Update user onboarding status
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        onboardingCompleted: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      user: updatedUser 
    });
    
  } catch (error) {
    console.error('Onboarding error:', error);
    return NextResponse.json({ 
      error: 'Failed to complete onboarding' 
    }, { status: 500 });
  }
}