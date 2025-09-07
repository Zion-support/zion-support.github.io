<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422

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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();


      {
        message: "Onboarding completed successfully",
        user: {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    console.error("Onboarding completion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      {
        message: 'Onboarding completed successfully'
        user: {
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      { status: 500 }
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

      { status: 500 }

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


      { status: 500 }


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    );
  }
}
}
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
