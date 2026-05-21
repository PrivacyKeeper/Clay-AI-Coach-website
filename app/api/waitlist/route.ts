export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const email = body?.email?.trim?.()?.toLowerCase?.() ?? '';
    const name = body?.name?.trim?.() ?? null;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const entry = await prisma.waitlistEntry.upsert({
      where: { email },
      update: { name: name ?? undefined },
      create: { email, name, source: 'website' },
    });

    return NextResponse.json(
      { success: true, message: "You're on the list! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
