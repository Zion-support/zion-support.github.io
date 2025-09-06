
    // Check if user already exists;
    const existing_user = await prisma.user.find_unique ({
      where: { email }}),
    // Check condition
if ( {) {
  $2
}
      return NextResponse.json (
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }
    // Hash password;
    const hashed_password = await bcrypt.hash (password, 12),
    // Create user;
    const user = await prisma.user.create ({
      data: {
        name,
        email,
        password: hashed_password,
        role: "user",
        onboarding_completed: false}}),
    // Remove password from response;
    const { password: _, ...userWithoutPassword } = user,
    return NextResponse.json (
      {
        message: "User created successfully",
        user: userWithoutPassword;
      },
      { status: 201 }
    );
  } catch (error) {
    // Check condition
if ( {) {
  $2
}
      return NextResponse.json (
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    console.error ("Registration error:", error);
    return NextResponse.json (
      { error: "Internal server error" }

      { status: 500 }
    );
  }
}