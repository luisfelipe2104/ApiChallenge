import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
    msg: string
}

export default async function updateItemDeliveryStatus(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } : any = req.query

    if(!id) return res.status(400).json({ msg: "Data can't be empty!" }) 
    
    try{
        await prisma.item.update({
            where: {
                id: id
            },
            data: {
                isDeliveried: true
            }
        })
        return res.status(200).json({ msg: "Item successfully delivered!" })
    } catch (err: any) {
        return res.status(400).json({ msg: err.message })
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
}