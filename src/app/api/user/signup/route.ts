import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prisma";
import { z } from "zod";
import * as argon from "argon2";

const createUserSchema = z.object({
  username: z.string().min(4).max(16),
  password: z.string().min(8),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = createUserSchema.safeParse(req.body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const hash = await argon.hash(body.password);

  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: hash,
      },
    });
  } catch (error: any) {
    if (error.meta.target.includes("key")) {
      if (error.code == "P2002") {
        return NextResponse.json("Felhasználónév foglalt!", { status: 403 });
      }
    }
  }
}
