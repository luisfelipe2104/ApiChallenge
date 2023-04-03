import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function getManyItemDelivery(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name } = req.body;

    if (!name) return res.status(400).json({ msg: "Data can't be empty" })

    try {
        const data = await prisma.item.findMany({
            where : {
                OR: [
                    {
                        receiverName: name,
                    },
                    {
                        senderName: name
                    }
                ]
            }
        })
        return res.status(200).json(data)
        
    } catch (err: any) {
        return res.status(400).json({ msg: err.message})
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
}