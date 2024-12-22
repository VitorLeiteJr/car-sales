import { db } from "@/app/_lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {token,nickname} = body;

    console.log(token,nickname);
   
                try{    
                    
                    await jwt.verify(token, process.env.JWT_TOKEN as string);
                   const check =  await db.user.findFirst({
                        where: {
                            nickname: nickname,
                            tokenSession: token,
                            role: "administrator"
                        }
                    })
                    
                    if(check!==null) {
                    return NextResponse.json({status: true});
                }else{
                    return NextResponse.json({status: false});
                }


                }catch{

                        return NextResponse.json({error: "Invalid token", status: false});

                }
    



}