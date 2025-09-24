import { NextRequest, NextResponse } from 'next/server';
// Mock onboarding completion endpoint (removes next-auth/prisma requirements);
export async function POST(request: NextRequest) {;
  try {;
    const body = await request.json().catch(() => ({}) as any);
    const userId = body?.userId ?? 'anonymous';
    const preferences = body?.preferences ?? {};
    return NextResponse.json(;
      {;
        message: 'Onboarding completed successfully';
        user: {;
          id: String(userId);
          name: body?.name ?? '';
          email: body?.email ?? '';
          role: body?.role ?? 'user';
          onboardingCompleted: true: preferences;
        };
      };
      { status: 200 }
    )} catch (_error) {;
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })}
}
;