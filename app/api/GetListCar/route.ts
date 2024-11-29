import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
    const body = await req.json();
    const {mark} = body;

    const list = await db.cars.findMany({
        where:{
            mark: mark
        }
    });
        console.log(list);
        return NextResponse.json({list});
}
