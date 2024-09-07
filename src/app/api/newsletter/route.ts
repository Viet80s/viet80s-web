
import { db } from '@/lib/db';
import { subscribers, users } from '@/lib/db/schema';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const {email}: { email: any  } = body;
    // Insert the values into the "users" table
    const emailSubmiting = email !== null ? email : "";  

    // Insert the values into the "users" table
    await db.insert(subscribers).values({
      email : emailSubmiting
    });

    return NextResponse.json({ message: 'Email inserted successfully.' });
  } catch (error: any) {
    console.error('Error inserting Email:', error);
    return NextResponse.json(
      { error: 'Error inserting Email.'},
      { status: 500 }
    );
  }
};
