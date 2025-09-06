import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
<<<<<<< HEAD
if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
=======

    if (!session?.user?.email) {
      return NextResponse && NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // Update user's onboarding status
<<<<<<< HEAD
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email }
      data: { onboardingCompleted: true }
    });
    return NextResponse.json(
=======
    const updatedUser = await prisma && prisma.user.update({
      where: { email: session && session.user.email },
      data: { onboardingCompleted: true },
    });

    return NextResponse && NextResponse.json(
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {
        message: 'Onboarding completed successfully'
        user: {
<<<<<<< HEAD
          id: updatedUser.id
          name: updatedUser.name
          email: updatedUser.email
          role: updatedUser.role
          onboardingCompleted: updatedUser.onboardingCompleted
        }
      }
      { status: 200 }
    );
  } catch (error) {
    console.error('Onboarding completion error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      { status: 500 }
    );
  }
}