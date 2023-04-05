import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import getFullItemData from "../../helpers/getFullItemData";

const prisma = new PrismaClient()

export default async function getItemDelivery(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } : any = req.query;

    if (!id) return res.status(400).json({ msg: "Data can't be empty" });

    try {
        const item : any = await prisma.item.findFirst({
            where: {
                id: id
            }
        })
        const data = await getFullItemData(item)
        return res.status(200).json(data);
    } catch (err: any) {
        return res.status(400).json({ msg: err.message });
    } finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}