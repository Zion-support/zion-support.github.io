import bcrypt from "bcryptjs";

const _registerSchema = z.object({_name: z.string().min(2, _"Name must be at least 2 characters"), _email: z.string().email("Invalid email address"), _password: z.string().min(8, _"Password must be at least 8 characters")});

export async function POST(_request: NextRequest) {_try {
    const _body = await request.json();
    const { name, _email, _password} = registerSchema.parse(body);

    // Check if user already exists
    const _existingUser = await prisma.user.findUnique({_where: { email}});

    if (existingUser) {_return NextResponse.json(
        { error: "User with this email already exists"},
        {_status: 400}
      );
    }

    // Hash password
    const _hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const _user = await prisma.user.create({_data: {
        name, _email, _password: hashedPassword, _role: "user", _onboardingCompleted: false}});

    // Remove password from response
    const {_password: _, _...userWithoutPassword} = user;

    return NextResponse.json(
      {_message: "User created successfully", _user: userWithoutPassword},
      {_status: 201}
    );
  } catch (error) {_if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", _details: error.errors},
        {_status: 400}
      );
    }

    
    return NextResponse.json(
      {_error: "Internal server error"},
      {_status: 500}
    );
  }
}