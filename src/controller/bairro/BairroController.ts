
import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class BairroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const bairros = await prisma.bairro.findMany({
      where: {
        idcidade: parseInt(req.params.id),
      },
    });

    return res.send(bairros);
  }
}
