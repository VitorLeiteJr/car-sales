import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
    const body = await req.json();
    const {mark} = body;

    if(mark==="all"){
        const list = await db.cars.findMany({});
        return NextResponse.json({list});   
    }
    const list = await db.cars.findMany({
        where:{
            mark: mark
        }
    });
        return NextResponse.json({list});
}
