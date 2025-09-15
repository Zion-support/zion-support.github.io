import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: false, error: 'Registration disabled in this build' }, { status: 501 });
}
