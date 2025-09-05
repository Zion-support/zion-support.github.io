
export async function POST(_request: NextRequest) {_try {
    const _session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized"},
        {_status: 401}
      );
    }

    // Update user's onboarding status
    const _updatedUser = await prisma.user.update({_where: { email: session.user.email},
      data: {_onboardingCompleted: true}});

    return NextResponse.json(
      {_message: "Onboarding completed successfully", _user: {
          id: updatedUser.id, _name: updatedUser.name, _email: updatedUser.email, _role: updatedUser.role, _onboardingCompleted: updatedUser.onboardingCompleted}
      },
      {_status: 200}
    );
  } catch (error) {_return NextResponse.json(
      { error: "Internal server error"},
      {_status: 500}
    );
  }
}