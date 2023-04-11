import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class BuscaController {
  async handle(req: Request, res: Response): Promise<Response> {
    let produto;
    if (req.params.id) {
      produto = await prisma.produto.findFirst({
        where: {
          idproduto: parseInt(req.params.id),
        },
      });
    } else {
      produto = await prisma.produto.findMany();
    }
    return res.send(produto);
  }
}

