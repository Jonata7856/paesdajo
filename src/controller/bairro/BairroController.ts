import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
import bairro from "../../Router/bairro";

export class BairroController {
  async handle(req: Request, res: Response): Promise<Response> {
    let bairro;
    if (req.params.id) {
      bairro = await prisma.bairro.findMany({
        where: {
          idcidade: parseInt(req.params.id),
        },
      });
    } else {
      bairro = await prisma.cidade.findMany();
    }
    return res.send(bairro);
  }
}