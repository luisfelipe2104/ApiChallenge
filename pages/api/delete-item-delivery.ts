import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deleteItemDelivery(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } : any = req.query;

  if (!id) return res.status(400).json({ msg: "Data can't be empty!" });

  try {
    await prisma.item.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({ msg: "Delivery cancelled!" });
  } catch (err: any) {
    return res.status(400).json({ msg: err.message });
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
