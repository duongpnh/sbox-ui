import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { Register } from "./types/register";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as Register;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password is required' });
    }

    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash: hashed_password,
      },
    });

    return NextResponse.json({
      user: {
        email: user.email,
      },
    });
  } catch (error: any) {
    console.log("🚀 ~ file: route.ts:30 ~ POST ~ error:", error)
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong while trying to register",
        result: error,
      }),
      { status: 500 }
    );
  }
}
