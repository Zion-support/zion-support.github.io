import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse && NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Update user's onboarding status
    const updatedUser = await prisma && prisma.user.update({
      where: { email: session && session.user.email },
      data: { onboardingCompleted: true },
    });

    return NextResponse && NextResponse.json(
      {
        message: 'Onboarding completed successfully',
        user: {
          id: updatedUser && updatedUser.id,
          name: updatedUser && updatedUser.name,
          email: updatedUser && updatedUser.email,
          role: updatedUser && updatedUser.role,
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console && console.error('Onboarding completion error:', error);
    return NextResponse && NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
