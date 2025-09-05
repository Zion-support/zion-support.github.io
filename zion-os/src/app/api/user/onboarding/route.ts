import { NextRequest, NextResponse } from &quot;next/server&quot;;
import { getServerSession } from &quot;next-auth&quot;;
import { prisma } from &quot;@/lib/prisma&quot;;

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: &quot;Unauthorized&quot; },
        { status: 401 }
      );
    }

    // Update user's onboarding status
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { onboardingCompleted: true }});

    return NextResponse.json(
      { 
        message: &quot;Onboarding completed successfully&quot;,
        user: {
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          onboardingCompleted: updatedUser.onboardingCompleted}
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(&quot;Onboarding completion error:&quot;, error);
    return NextResponse.json(
      { error: &quot;Internal server error&quot; },
      { status: 500 }
    );
  }
}