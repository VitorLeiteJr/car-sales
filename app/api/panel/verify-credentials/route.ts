import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/app/_lib/prisma";



export const POST = async (req: NextRequest) =>{

    const body = await req.json();
    const {login,password} = body;

    const userData = await db.user.findFirst({
        where: {
            login: login as string,
            password: password as string
        }
    });
        
    var response = {

        token: "notoken",
        status: false
    };

    if(userData===null) return NextResponse.json({response});


    const token = jwt.sign({id: userData?.id,password: userData?.password}, process.env.JWT_TOKEN as string, {expiresIn: 60*24});

     response = {
        token: token,
        status: true
    }

        return NextResponse.json({response});

}