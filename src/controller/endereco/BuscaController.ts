import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class BuscaController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const idcliente = parseInt(req.params.id);
      if (isNaN(idcliente)) {
        return res.status(400).send("O idcliente fornecido não é um número válido.");
      }
      const enderecocliente = await prisma.enderecocliente.findFirst({
        where: { idcliente },
      });
      if (!enderecocliente) {
        return res.status(404).send("Endereço não encontrado para o idcliente fornecido.");
      }
      return res.send(enderecocliente);
    } catch (error) {
      console.error("Erro ao buscar endereço do cliente:", error);
      return res.status(500).send("Erro ao buscar endereço do cliente.");
    }
  }
}
