import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) =>{

    const body = await req.json();
    const { id } = body;

    try {

       const images =  await db.images.findMany({
        select:{
            id: true,
            src: true,
        },
            where: {
                carId: id
            }   
        });

        return NextResponse.json({images: images, status: true});

    }catch{

        return NextResponse.json({status: false});
    }



}