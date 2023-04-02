import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

type Data = {
    msg: string
}

export default async function createItemDelivery(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { itemName, receiverCEP, receiverName, senderCEP, senderName } = req.body;
    
    if (!itemName || !receiverCEP || !receiverName || !senderCEP || !senderName) {
        return res.status(400).json({ msg: "Data can't be empty" })
    }

    try{
        const data = { itemName, receiverCEP, receiverName, senderCEP, senderName }
        await prisma.item.create({ data: data })
        return res.status(200).json({ msg: "Item will be delivered soon!" })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ msg: "Data is invalid!" })
    } finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}