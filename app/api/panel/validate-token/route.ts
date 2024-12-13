import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {token} = body;


    try{    
        
        await jwt.verify(token, process.env.JWT_TOKEN as string);

        return NextResponse.json({status: true});


    }catch{

            return NextResponse.json({error: "Invalid token", status: false});

    }
}