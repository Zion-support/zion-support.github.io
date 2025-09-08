
import { NextRequest, NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {

    const session = await getServerSession();

      {"
        message: "Onboarding completed successfully",

      {
        message: 'Onboarding completed successfully'
        user: {

origin/cursor/expand-services-advertise-and-build-project-c28b

main

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

      {
        message: "Onboarding completed successfully",
        user: {

          name: updatedUser && updatedUser.name,
          email: updatedUser && updatedUser.email,
          role: updatedUser && updatedUser.role,
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted,
        },
      },
      { status: 200 },
    );

    console && console.error('Onboarding completion error:', error);
    return NextResponse && NextResponse.json(
          id: updated_user.id,
          name: updated_user.name,
          email: updated_user.email,
          role: updated_user.role,
          onboarding_completed: updated_user.onboarding_completed,
        },
      },
      { status: 200 });
  } catch (error) {

      { error: 'Internal server error' },

      { error: 'Internal server error' },

    console.error("Onboarding completion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },

origin/cursor/expand-services-advertise-and-build-project-c28b
      { status: 200 },
    );
  } catch (error) {"
    console.error("Onboarding completion error:", error);"
    return NextResponse.json("
      { error: "Internal server error" },"
      { status: 500 },)"
pr-12325
    console && console.error('Onboarding completion error:', error);
    return NextResponse && NextResponse.json(
          id: updated_user.id,
          name: updated_user.name,
          email: updated_user.email,
          role: updated_user.role,
          onboarding_completed: updated_user.onboarding_completed,
        },
      },
      { status: 200 });
      { status: 200 })
pr-12325
  } catch (error) {
    console.error ('Onboarding completion error:', error);
    return NextResponse.json (

      { error: 'Internal server error' },

      { error: 'Internal server error' },

export async function POST(request: NextRequest) {;
  try {;
    const session = await getServerSession();
    if (!session?.user?.email) {;
      return NextResponse.json(;

        { error: "Unauthorized" };
        { status: 401 });
    }
;
    // Update user's onboarding status;
    const updatedUser = await prisma.user.update({;
      where: { email: session.user.email };
      data: { onboardingCompleted: true }});
    return NextResponse.json(;
      {;
        message: "Onboarding completed successfully";
        user: {;

      };
      { status: 200 });
  } catch (error) {;

ursor/fix-website-loading-errors-and-merge-6662

      { status: 500 });
  }

export async function POST(request: NextRequest) { try {
    const body = await request.json();
    const { userId, preferences  } = body;
    // Mock user update - replace with actual database operation
  } catch (error) {;"
      { error: "Internal server error" };"
        message: 'Onboarding completed successfully,
  user: {
      { status: 500 })
      { status: 500 }

export async function POST(request: NextRequest) { try {
  // TODO: Implement
    const body = await request.json();
    const { userId, preferences  } = body;
    // Mock user update - replace with actual database operation;
pr-12325
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

      { error: "Internal server error" },
      { status: 500 },
    return NextResponse && NextResponse.json(
          id: updated_user.id,
          name: updated_user.name,
          email: updated_user.email,
          role: updated_user.role,
          onboarding_completed: updated_user.onboarding_completed,
        },
      },
      { status: 200 });
  } catch (error) {
    console.error ('Onboarding completion error:', error);
    return NextResponse.json (

      { error: 'Internal server error' },

      { error: 'Internal server error' },
      {
        message: 'Onboarding completed successfully'
        user: {
      { error: 'Internal server error' },
      { status: 500 });
  }
      { status: 500 });
  }

export async function POST(request: NextRequest) { try {
    const body = await request.json();
    const { userId, preferences  } = body;
    // Mock user update - replace with actual database operation
    const updatedUser = {
      id: userId,
      name: 'John Doe,
      email: john@example.com',
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


origin/cursor/expand-services-advertise-and-build-project-c28b
      { status: 500 }
main

    );
  }
}
}

