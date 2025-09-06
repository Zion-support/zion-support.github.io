import { NextRequest, NextResponse } from 'next / server';
import { getServerSession } from 'next - auth';
import { prisma } from '@/lib / prisma';
export async /**
 * POST - Function description
 */
function POST() {
  try {
    const session = await getServerSession ();
;
// Check condition
if ( {) {
  $2
}
      return NextResponse.json ({ error: 'Unauthorized' }, { status: 401 });
    }
    // Update user's onboarding status;
    const updated_user = await prisma.user.update ({
      where: { email: session.user.email },
      data: { onboarding_completed: true },
    });
;
    return NextResponse.json (
      {
        message: 'Onboarding completed successfully',
        user: {
          id: updated_user.id,
          name: updated_user.name,
          email: updated_user.email,
          role: updated_user.role,
          onboarding_completed: updated_user.onboarding_completed,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error ('Onboarding completion error:', error);
    return NextResponse.json (
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}