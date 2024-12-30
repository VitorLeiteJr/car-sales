import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) =>{

    const body = await req.json();
    const {id,name,year,km} = body;   


    try {

     await db.cars.update({

            where:{
                id:id
            },
            data:{
                name:name,
                year:year,
                km:parseInt(km)
            }   
                        });

           return NextResponse.json({status: true, message: "Informações atualizadas com sucesso"});             

    }catch{

        return NextResponse.json({status: false, message: "Erro ao atualizar informações"});
    }

                                    }
