import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ error: 'Auth disabled in this build' }, { status: 501 });
}

export async function POST() {
  return NextResponse.json({ error: 'Auth disabled in this build' }, { status: 501 });
}
