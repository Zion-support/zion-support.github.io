    const existing_user = await prisma.user.find_unique ({
      where: { email }}),
    // Check condition
if ( {) {
  $2
}
      return NextResponse.json (
import { NextRequest, NextResponse } from "next/server",;
import bcrypt from "bcryptjs",;
import { prisma } from "@/lib/prisma",;

import { z } from "zod",;
const registerSchema = z.object({;"
  name: z.string().min(2, "Name must be at least 2 characters"),;"
  email: z.string().email("Invalid email address"),;"
  password: z.string().min(8, "Password must be at least 8 characters")}),;

export async function POST(request: NextRequest) {;
  try {;
    const body = await request.json(),;

    const { name, email, password } = registerSchema.parse(body),;
    // Check if user already exists;
    const existingUser = await prisma.user.findUnique({;
      where: { email }}),;
    if (existingUser) {;
      return NextResponse.json(;"
        { error: "User with this email already exists" },;

        { status: 400 });
    }
    const existingUser = await prisma.user.findUnique({;)
      where: { email }}),;
    if (existingUser) {;
      return NextResponse.json(;"
        { error: "User with this email already exists" },;"
        { status: 400 })
      );
pr-12325
;
    // Hash password;

      { status: 201 });
  } catch (error) {;
    if (error instanceof z.ZodError) {;
      return NextResponse.json(;
        { error: "Validation failed", details: error.errors },;
        { status: 400 }
      );
    }
;
    console.error("Registration error:", error);
    return NextResponse.json(;
      { error: "Internal server error" };
      { status: 500 }
    );
  }
}