import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import getFullItemData from "../../helpers/getFullItemData";

const prisma = new PrismaClient()

interface Item {
    senderCEP: string,
    receiverCEP: string,
    from: string,
    to: string
}

export default async function getManyItemDelivery(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name } : any = req.query;

    if (!name) return res.status(400).json({ msg: "Data can't be empty" })

    try {
        const data: any = await prisma.item.findMany({
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
        const dataArray : any[] = []

        for (let i = 0; i < data.length; i++) {
            const result = await getFullItemData(data[i])
            dataArray.push(result)
        }
       
        return res.status(200).json(dataArray)

    } catch (err: any) {
        return res.status(400).json({ msg: err.message})
    } finally {
        async () => {
            await prisma.$disconnect()
        }
    }
}