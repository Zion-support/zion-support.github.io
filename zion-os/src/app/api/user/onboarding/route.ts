 return NextResponse.json ({
  message: "Onboarding completed successfully", user: {
  id: updatedUser.id, name: updatedUser.name, email: updatedUser.email, role: updatedUser.role, onboardingCompleted: updatedUser.onboardingCompleted 
}
};
}
}