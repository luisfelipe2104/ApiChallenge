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
    const { id } = req.body
    
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
    } catch (err) {
        return res.status(400).json({ msg: "An error occured!" })
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
}