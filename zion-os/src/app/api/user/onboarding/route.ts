import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    }
    // Update user's onboarding status
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {
        message: 'Onboarding completed successfully'
        user: {
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
      { status: 500 }
    );
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
