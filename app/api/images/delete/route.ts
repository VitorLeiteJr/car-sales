import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body =await req.json();
    const {id} = body;

    try{

        await db.images.deleteMany({
            where:{
                id: id
            }
        });  

        return NextResponse.json({status: true})

    }catch{

            return NextResponse.json({status: false});
        
    }
    
}