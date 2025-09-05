<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server",
import bcrypt from "bcryptjs",
import { prisma } from "@/lib/prisma",
import { z } from "zod",
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")}),

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(),
    const { name, email, password } = registerSchema.parse(body),

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }}),

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12),

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "user",
        onboardingCompleted: false}}),

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user,

    return NextResponse.json(
      { 
        message: "User created successfully",
        user: userWithoutPassword 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      )
    }

    console.error("Registration error:", error),
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}