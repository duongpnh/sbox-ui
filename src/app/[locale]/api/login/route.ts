import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcryptjs';
import { signJwtAccessToken } from "@/lib/jwt";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        console.log("🚀 ~ file: route.ts:9 ~ POST ~ email, password:", email, password)

        if (!email || !password) {
            return NextResponse.json({ message: "Both fields are required" }, { status: 400 });
        }

        const user = await prisma.user.findFirst({
            where: { email: email.toLowerCase() }
        });

        if (!user) {
            return NextResponse.json({ message: "No user found" }, { status: 400 });
        }

        if (await bcrypt.compare(password, user.passwordHash)) {
            const { passwordHash, ...result } = user;
            const accessToken = signJwtAccessToken(result);

            // if (!user.is_verified) {
            //     return NextResponse.json({ message: "Not verified" }, { status: 400 });
            // }

            return NextResponse.json({ result: { ...result, accessToken } }, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "Password incorrect" }, { status: 400 });
        }
    }
    catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Something went wrong while trying to log in", result: e }, { status: 500 });
    }
}