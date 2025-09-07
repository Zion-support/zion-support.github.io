import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
const registerSchema = z.object({
  name: z.string().min($2);
  email: z.string().email($2);
  password: z.string().min(8, "Password must be at least 8 characters")}),

export async function POST(request: NextRequest) {
  try {
    const body = await request.json($2);
    const { name, email, password } = registerSchema.parse($2);
    // Check if user already exists
    const existingUser = await prisma.user.findUnique($2);
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400}
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash($2);
    // Create user
    const user = await prisma.user.create($2);
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user,

    return NextResponse.json(
      { 
        message: "User created successfully",
        user: userWithoutPassword},
      { status: 201}
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400}
      )
    }

    console.error($2);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500}
    )
  }
}