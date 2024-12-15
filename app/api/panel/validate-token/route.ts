import { db } from "@/app/_lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {token,login} = body;

   
                try{    
                    
                    await jwt.verify(token, process.env.JWT_TOKEN as string);
                    const checkUser = db.user.findFirst({
                        where: {
                            login: login
                            token: token
                        }
                    })

                    return NextResponse.json({status: true});


                }catch{

                        return NextResponse.json({error: "Invalid token", status: false});

                }
    



}