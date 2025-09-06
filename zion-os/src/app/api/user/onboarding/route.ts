<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
=======
<<<<<<< HEAD
=======
=======
=======
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import { NextRequest, NextResponse } from "next/server";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  try {
=======
import { NextRequest, NextResponse } from "next/server";"
import { getServerSession } from "next-auth";"
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {}
  try {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const session = await getServerSession();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

      {"
        message: "Onboarding completed successfully",
<<<<<<< HEAD
        user: {

=======          id: updatedUser && updatedUser.id,
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      {
        message: 'Onboarding completed successfully'
        user: {

origin/cursor/expand-services-advertise-and-build-project-c28b

main

=======
<<<<<<< HEAD
        user: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();


      {
        message: "Onboarding completed successfully",
        user: {

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          id: updatedUser && updatedUser.id,
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          name: updatedUser && updatedUser.name,
          email: updatedUser && updatedUser.email,
          role: updatedUser && updatedUser.role,
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted,
        },
      },
      { status: 200 },
    );
<<<<<<< HEAD
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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



      { error: 'Internal server error' },

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
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
          onboarding_completed: updated_user.onboarding_completed,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error ('Onboarding completion error:', error);
    return NextResponse.json (

      { error: 'Internal server error' },



      { error: 'Internal server error' },

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { NextRequest, NextResponse } from "next/server",;
import { getServerSession } from "next-auth",;
import { prisma } from "@/lib/prisma",;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export async function POST(request: NextRequest) {;
  try {;
    const session = await getServerSession();
    if (!session?.user?.email) {;
      return NextResponse.json(;
        { error: "Unauthorized" };
        { status: 401 }
      );
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
          id: updatedUser.id;
          name: updatedUser.name;
          email: updatedUser.email;
          role: updatedUser.role;
          onboardingCompleted: updatedUser.onboardingCompleted}
      };
      { status: 200 }
    );
  } catch (error) {;
=======
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    console.error("Onboarding completion error:", error);
    return NextResponse.json(;
      { error: "Internal server error" };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      { status: 500 }
    );
  }
}
=======
<<<<<<< HEAD
      {
        message: 'Onboarding completed successfully'
        user: {
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



ursor/fix-website-loading-errors-and-merge-6662
=======
      {
        message: 'Onboarding completed successfully'
        user: {
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
=======
    console.error("Onboarding completion error:", error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    return NextResponse.json(
=======
  } catch (error) {"
    console.error("Onboarding completion error:", error);
    return NextResponse.json("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      { status: 200 }
    );
  } catch (error) {
    console.error ('Onboarding completion error:', error);
    return NextResponse.json (

      { error: 'Internal server error' },

      { error: 'Internal server error' },
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

<<<<<<< HEAD
<<<<<<< HEAD
      { status: 500 }
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/expand-services-advertise-and-build-project-c28b

      { status: 500 }

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
      { status: 500 }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    );
  }
}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
