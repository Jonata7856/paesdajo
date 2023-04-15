import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

//FAZER A CONSULTA PASSANDO O IDCLIENTE COMO PARAMETRO 
export class BuscaController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const idcliente = parseInt(req.params.id);
      if (isNaN(idcliente)) {
        return res.status(400).send("O idcliente fornecido não é um número válido.");
      }
      const pedido= await prisma.pedido.findFirst({
        where: { idcliente },
      });
      if (!pedido) {
        return res.status(404).send("Endereço não encontrado para o idcliente fornecido.");
      }
      return res.send(pedido);
    } catch (error) {
      console.error("Erro ao buscar endereço do cliente:", error);
      return res.status(500).send("Erro ao buscar endereço do cliente.");
    }
  }
}