<<<<<<< HEAD
import { NextResponse } from "next/server";

=======

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
const registerSchema = z.object({name: z.string().min(2, "Name must be at least 2 characters");
  email: z.string().email("Invalid email address");
  password: z.string().min(8, "Password must be at least 8 characters")});
>>>>>>> origin/merge-pr-12271
export async function POST() {
  return NextResponse.json({ status: "registration temporarily disabled" }, { status: 200 });
}
<<<<<<< HEAD
=======
      return NextResponse.json (
import { NextRequest, NextResponse } from "next/server",;
import bcrypt from "bcryptjs",;
import { prisma } from "@/lib/prisma",;
import { z } from "zod",;
const registerSchema = z.object({;
  name: z.string().min(2, "Name must be at least 2 characters"),;
  email: z.string().email("Invalid email address"),;
  password: z.string().min(8, "Password must be at least 8 characters")}),;
export async function POST(request: NextRequest) {;
  try {;
    const body = await request.json();
    const { name, email, password } = registerSchema.parse(body),;
    // Check if user already exists;
    const existingUser = await prisma.user.findUnique({;
      where: { email }}),;
    if (existingUser) {;
      return NextResponse.json(;
        { error: "User with this email already exists" },;
        { status: 400 }
      );
    }
;
import { NextRequest, NextResponse  } from './next / server';,import bcrypt from './bcryptjs';,import { prisma  } from '@/lib / prisma';,import { z  } from './zod';,const register_schema = z.object ({name: z.string ().min (2, "Name must be at least 2 characters"),email: z.string ().email ("Invalid email address"),password: z.string ().min (8, "Password must be at least 8 characters")}),export async /**;
 * POST - Function description;
 */;
function POST() {try {const body = await request.json (),const { name, email, password } = register_schema.parse (body),const existing_user = await prisma.user.find_unique ({where: { email }}),// Check condition;
if ( {) {$2;
}
      return NextResponse.json (import { NextRequest, NextResponse } from "next/server",import bcrypt from "bcryptjs",import { prisma } from "@/lib/prisma",import { z } from "zod",const registerSchema = z.object({name: z.string().min(2, "Name must be at least 2 characters"),email: z.string().email("Invalid email address"),password: z.string().min(8, "Password must be at least 8 characters")}),export async function POST() {try {const body = await request.json()const body = await request.json()const { name, email, password } = registerSchema.parse(body),// Check if user already exists;
    const existingUser = await prisma.user.findUnique({where: { email }}),if (existingUser) {return NextResponse.json({ error: "User with this email already exists" },{ status: 400 }
      )}// Hash password;
    const hashedPassword = await bcrypt.hash(password, 12),// Create user;
    const user = await prisma.user.create({data: {name,email,password: hashedPassword,role: "user",onboardingCompleted: false}}),// Remove password from response;
    const { password: _, ...userWithoutPassword } = user,return NextResponse.json({message: "User created successfully",user: userWithoutPassword;
      },{ status: 201 }
    )} catch (error) {if (error instanceof z.ZodError) {return NextResponse.json({ error: "Validation failed", details: error.errors },{ status: 400 }
      )}console.error("Registration error:", error)return NextResponse.json({ error: "Internal server error" }{ status: 500 }
    )}
}
>>>>>>> origin/merge-pr-12271
