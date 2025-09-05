import { NextRequest, NextResponse } from &quot;next/server&quot;;
import bcrypt from &quot;bcryptjs&quot;;
import { prisma } from &quot;@/lib/prisma&quot;;
import { z } from &quot;zod&quot;;

const registerSchema = z.object({
  name: z.string().min(2, &quot;Name must be at least 2 characters&quot;),
  email: z.string().email(&quot;Invalid email address&quot;),
  password: z.string().min(8, &quot;Password must be at least 8 characters&quot;)});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = registerSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }});

    if (existingUser) {
      return NextResponse.json(
        { error: &quot;User with this email already exists&quot; },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: &quot;user&quot;,
        onboardingCompleted: false}});

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { 
        message: &quot;User created successfully&quot;,
        user: userWithoutPassword 
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: &quot;Validation failed&quot;, details: error.errors },
        { status: 400 }
      );
    }

    console.error(&quot;Registration error:&quot;, error);
    return NextResponse.json(
      { error: &quot;Internal server error&quot; },
      { status: 500 }
    );
  }
}