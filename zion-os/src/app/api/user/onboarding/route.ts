<<<<<<< HEAD
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: false, error: 'Onboarding disabled in this build' }, { status: 501 });
=======

;
ursor/automate-test-improve-and-merge-code-646c;
import { NextRequest, NextResponse  } from 'next/server';
import { getServerSession  } from 'next-auth';
import { prisma  } from '@/lib/prisma';
export async function POST() {try {const session  = await getServerSession(){message: "Onboarding completed successfully",user: {{message: 'Onboarding completed successfully';
        user: {ursor/automate-test-improve-and-merge-code-646c;
          id: updatedUser && updatedUser.id,name: updatedUser && updatedUser.name,email: updatedUser && updatedUser.email,role: updatedUser && updatedUser.role,onboardingCompleted: updatedUser && updatedUser.onboardingCompleted;
        }
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted;
        }
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted;
        }
      },{ status: 200 },)} catch (error) {ursor/automate-test-improve-and-merge-code-646c;
    console.error("Onboarding completion error:", error)return NextResponse.json({ error: "Internal server error" },{ status: 500 },console && console.error('Onboarding completion error:', error)return NextResponse && NextResponse.json(id: updated_user.id,name: updated_user.name,email: updated_user.email,role: updated_user.role,onboarding_completed: updated_user.onboarding_completed;
        }
          onboarding_completed: updated_user.onboarding_completed;
        }
          onboarding_completed: updated_user.onboarding_completed;
        }
      },{ status: 200 }
    )} catch (error) {console.error ('Onboarding completion error:', error)return NextResponse.json ({ error: 'Internal server error' },{ error: 'Internal server error' },import { NextRequest, NextResponse } from "next/server",import { getServerSession } from "next-auth",import { prisma } from "@/lib/prisma",export async function POST() {try {const session = await getServerSession()const session = await getServerSession()const session = await getServerSession()if (!session?.user?.email) {return NextResponse.json({ error: "Unauthorized" },{ status: 401 }
      )}// Update user's onboarding status;
    const updatedUser = await prisma.user.update({where: { email: session.user.email },data: { onboardingCompleted: true }}),return NextResponse.json({message: "Onboarding completed successfully",user: {id: updatedUser.id,name: updatedUser.name,email: updatedUser.email,role: updatedUser.role,onboardingCompleted: updatedUser.onboardingCompleted}
      },{ status: 200 }
    )} catch (error) {console.error("Onboarding completion error:", error)return NextResponse.json({ error: "Internal server error" }{message: 'Onboarding completed successfully';
        user: {{ error: 'Internal server error' },{ status: 500 }
    )}ursor/fix-website-loading-errors-and-merge-6662;
ursor/fix-website-loading-errors-and-merge-6662;
      { status: 500 }
    )}export async function POST(request: NextRequest) { try {const body = await request.json()const { userId, preferences  } = body;
    // Mock user update - replace with actual database operation;
    const updatedUser = {id: userId,name: 'John Doe',email: 'john@example.com',role: 'user',onboardingCompleted: true,preferences;
    }return NextResponse.json({message: "Onboarding completed successfully",user: {id: updatedUser.id,name: updatedUser.name,email: updatedUser.email,role: updatedUser.role,onboardingCompleted: updatedUser.onboardingCompleted;
      }
    })} catch (_error) {return NextResponse.json({ error: 'Failed to complete onboarding' },{ status: 500 }ursor/automate-test-improve-and-merge-code-646c;
      { status: 500 }
      { status: 500 })}
}
}
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();


      {
        message: "Onboarding completed successfully",
        user: {

          id: updatedUser && updatedUser.id,
          name: updatedUser && updatedUser.name,
          email: updatedUser && updatedUser.email,
          role: updatedUser && updatedUser.role,
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted
        }
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Onboarding completion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    console && console.error('Onboarding completion error:', error);
    return NextResponse && NextResponse.json(
          id: updated_user.id,
          name: updated_user.name,
          email: updated_user.email,
          role: updated_user.role,
          onboarding_completed: updated_user.onboarding_completed
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error ('Onboarding completion error:', error);
    return NextResponse.json (

      { error: 'Internal server error' },



      { error: 'Internal server error' },

import { NextRequest, NextResponse } from "next/server",;
import { getServerSession } from "next-auth",;
import { prisma } from "@/lib/prisma",;
export async function POST(request: NextRequest) {;
  try {;
    const session = await getServerSession();
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
>>>>>>> origin/merge-pr-12271
}
