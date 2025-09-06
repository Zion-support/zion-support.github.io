<<<<<<< HEAD
<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
=======
<<<<<<< HEAD
=======
=======
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


      {
        message: "Onboarding completed successfully",
        user: {

          id: updatedUser && updatedUser.id,
          name: updatedUser && updatedUser.name,
          email: updatedUser && updatedUser.email,
          role: updatedUser && updatedUser.role,
          onboardingCompleted: updatedUser && updatedUser.onboardingCompleted,
        },
      },
      { status: 200 },
    );
  } catch (error) {
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
    console.error("Onboarding completion error:", error);
    return NextResponse.json(;
      { error: "Internal server error" };
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
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
