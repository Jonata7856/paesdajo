import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class CidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    let cidades;
    if (req.params.id) {
      cidades = await prisma.cidade.findMany({
        where: {
          idestado: parseInt(req.params.id),
        },
      });
    } else {
      cidades = await prisma.cidade.findMany();
    }
    return res.send(cidades);
  }
}
