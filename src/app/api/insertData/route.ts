
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const {exFactor, taFactor, moFactor, stFactor}: { exFactor: any, taFactor: any, moFactor: any, stFactor: any  } = body;
    // Insert the values into the "users" table
    const exFactorsubmit = exFactor !== null ? exFactor : 0;  
    const taFactorsubmit = taFactor !== null ? taFactor : 0;  
    const moFactorsubmit = moFactor !== null ? moFactor : 0; 
    const stFactorsubmit = stFactor !== null ? stFactor : 0; 
    // Insert the values into the "users" table
    await db.insert(users).values({
      explorative: exFactorsubmit,
      taste: taFactorsubmit,
      mood: moFactorsubmit,
      style: stFactorsubmit,
    });

    return NextResponse.json({ message: 'Data inserted successfully.' });
  } catch (error: any) {
    console.error('Error inserting data:', error);
    return NextResponse.json(
      { error: 'Error inserting data.'},
      { status: 500 }
    );
  }
};
