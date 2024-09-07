import { db } from "@/lib/db";
import {  subscribers } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (req: Request) => {

  try {

    const _subscribers = await db
    .select()
    .from(subscribers);

    return NextResponse.json(_subscribers);
  } catch (error) {
    console.log(error, "Fetching _subscribers is going wrong")
    return NextResponse.json({error: "Fetching _subscribers is going wrong"}, {status: 500}); 
  }
}