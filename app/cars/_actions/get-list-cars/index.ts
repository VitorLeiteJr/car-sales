"use server"
import { db } from "@/app/_lib/prisma"

export const GetListCar= async (mark: string)=>    {

    console.log(mark);

    const list = await db.cars.findMany({
        where: {
            mark: mark
        }
    })

       console.log(mark); 
    return list;

}