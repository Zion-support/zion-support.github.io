<<<<<<< HEAD
=======
<<<<<<< HEAD
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
export async function POST(request: NextRequest) {
  try {;
    const session = await getServerSession();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
if (!session?.user?.email) {
      return NextResponse && NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // Update user's onboarding status
    const updatedUser = await prisma && prisma.user.update({
      where: { email: session && session.user.email },
      data: { onboardingCompleted: true },
    });
    return NextResponse && NextResponse.json(
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
        message: 'Onboarding completed successfully'
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
<<<<<<< HEAD
    console && console.error('Onboarding completion error:', error);
    return NextResponse && NextResponse.json(
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
=======
    console.error('Onboarding completion error:', error);
    return NextResponse.json(
<<<<<<< HEAD
      { error: 'Internal server error' }
=======
      { error: 'Internal server error' },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { NextRequest, NextResponse } from "next/server",;
import { getServerSession } from "next-auth",;
import { prisma } from "@/lib/prisma",;
export async function POST(request: NextRequest) {;
  try {;
    const session = await getServerSession(),;
    if (!session?.user?.email) {;
      return NextResponse.json(;
        { error: "Unauthorized" },;
        { status: 401 }
      );
    }
;
    // Update user's onboarding status;
    const updatedUser = await prisma.user.update({;
      where: { email: session.user.email },;
      data: { onboardingCompleted: true }}),;
    return NextResponse.json(;
      {;
        message: "Onboarding completed successfully",;
        user: {;
          id: updatedUser.id,;
          name: updatedUser.name,;
          email: updatedUser.email,;
          role: updatedUser.role,;
          onboardingCompleted: updatedUser.onboardingCompleted}
      },;
      { status: 200 }
    );
  } catch (error) {;
    console.error("Onboarding completion error:", error);
    return NextResponse.json(;
      { error: "Internal server error" };
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      { status: 500 }
    );
  }
export async function POST(request: NextRequest) { try {
    const body = await request.json();
    const { userId, preferences  } = body;
    // Mock user update - replace with actual database operation
    const updatedUser = {
      id: userId,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      onboardingCompleted: true,
      preferences
    };
    return NextResponse.json({
      message: "Onboarding completed successfully",
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        onboardingCompleted: updatedUser.onboardingCompleted
      }
    });
  } catch (_error) {
    return NextResponse.json(
      { error: 'Failed to complete onboarding' },
      { status: 500 }
    );
  }
}
}