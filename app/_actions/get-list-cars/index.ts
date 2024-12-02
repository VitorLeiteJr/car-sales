"use server"
import { db } from "@/app/_lib/prisma"

export const GetListCar= async ()=>    {

    const list = await db.cars.findMany({
        
    })

    return list;

}