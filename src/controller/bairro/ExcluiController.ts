import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class ExcluiController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!Number.isInteger(parseInt(id))) {
      return res.status(400).send("O ID do bairro deve ser um número inteiro");
    }

    try {
      const bairro = await prisma.bairro.delete({
        where: { idbairro: parseInt(id) },
      });
      return res.send("Bairro excluído com sucesso!");
    } catch (err) {
      console.error(err);
      return res.status(500).send("Erro ao excluir o bairro");
    }
  }
}


