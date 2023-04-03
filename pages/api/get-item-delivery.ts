import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function getItemDelivery(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.body;

    if (!id) return res.status(400).json({ msg: "Data can't be empty" });

    try {
        const item = await prisma.item.findFirst({
            where: {
                id: id
            }
        })
        return res.status(200).json(item);
    } catch (err: any) {
        return res.status(400).json({ msg: err.message });
    } finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}