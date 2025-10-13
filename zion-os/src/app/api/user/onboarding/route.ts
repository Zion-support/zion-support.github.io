import { NextRequest, NextResponse } from 'next/server';';
import { getServerSession } from 'next-auth';';
import { prisma } from '@/lib/prisma';';';
export async function POST(request: NextRequest) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const session = await getServerSession()
if (!session?.user?.email) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })'
    }
    // Update user's onboarding status;';
const updatedUser = await prisma.user.update({
  // TODO: Add properties
}
  // TODO: Add properties
}
      where: { email: session.user.email }
      data: { onboardingCompleted: true }
    })
    return NextResponse.json(
  // TODO: Add parameters
)
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        message: 'Onboarding completed successfully''
        user: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          id: updatedUser && updatedUser.id,
          name: updatedUser && updatedUser.name,
          email: updatedUser && updatedUser.email,
          role: updatedUser && updatedUser.role,
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted,
        },
      },
      { status: 200 }
    )
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Onboarding completion error:', error)'
    return NextResponse.json(
  // TODO: Add parameters
)
          id: updated_user.id,
          name: updated_user.name,
          email: updated_user.email,
          role: updated_user.role,
          onboarding_completed: updated_user.onboarding_completed,
        },
      },
      { status: 200 }
    )
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error ('Onboarding completion error:', error)'
    return NextResponse.json (
  // TODO: Add parameters
)
      { error: 'Internal server error' },';
import { NextRequest, NextResponse } from "next/server",";";
import { getServerSession } from "next-auth",";";
import { prisma } from "@/lib/prisma",;";";
export async function POST(request: NextRequest) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const session = await getServerSession(),
    if (!session?.user?.email) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return NextResponse.json(
  // TODO: Add parameters
)
        { error: "Unauthorized" },"
        { status: 401 }
      )
    }

    // Update user's onboarding status;';
const updatedUser = await prisma.user.update({
  // TODO: Add properties
}
  // TODO: Add properties
}
      where: { email: session.user.email },
      data: { onboardingCompleted: true }}),
    return NextResponse.json(
  // TODO: Add parameters
)
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        message: "Onboarding completed successfully","
        user: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          onboardingCompleted: updatedUser.onboardingCompleted}
      },
      { status: 200 }
    )
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Onboarding completion error:", error)"
    return NextResponse.json(
  // TODO: Add parameters
)
      { error: "Internal server error" }"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      { status: 500 }
    )
  }
export async function POST(request: NextRequest) { try {;
const body = await request.json();
const { userId, preferences  } = body
    // Mock user update - replace with actual database operation;
const updatedUser = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: userId,
      name: 'John Doe','
      email: 'john@example.com','
      role: 'user','
      onboardingCompleted: true,
      preferences
    }
    return NextResponse.json({
  // TODO: Add properties
}
  // TODO: Add properties
}
      message: "Onboarding completed successfully","
      user: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        onboardingCompleted: updatedUser.onboardingCompleted
      }
      { status: 200 }
    )
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Onboarding completion error:', error)'
    return NextResponse.json(
  // TODO: Add parameters
)
      { error: 'Internal server error' }'
      { error: 'Internal server error' },'
      { status: 500 }
    )
  }
}
      { status: 500 }
    )
  }
}
}
import { NextRequest, NextResponse } from "next/server";";
import { getServerSession } from "next-auth";";
import { prisma } from "@/lib/prisma";";";
export async function POST(request: NextRequest) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const session = await getServerSession()
    if (!session?.user?.email) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return NextResponse.json(
  // TODO: Add parameters
)
        { error: "Unauthorized" },"
        { status: 401 }
      )
    }
    // Update user's onboarding status;';
const updatedUser = await prisma.user.update({
  // TODO: Add properties
}
  // TODO: Add properties
}
      where: { email: session.user.email },
      data: { onboardingCompleted: true },
    })
    return NextResponse.json(
  // TODO: Add parameters
)
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        message: "Onboarding completed successfully","
        user: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          id: updatedUser.id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          onboardingCompleted: updatedUser.onboardingCompleted,
        }
      },
      { status: 200 }
    )
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Onboarding completion error:", error)"
    return NextResponse.json(
  // TODO: Add parameters
)
      { error: "Internal server error" },"
      { status: 500 }
    )
  }
}
