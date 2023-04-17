import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
//CADASTRA O PRODUTO DO PEDIDO 
export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idproduto, idpedido } = req.body;

    if (!idproduto || !idpedido ) {
      return res.status(400).send("Dados de entrada inválidos");
    }
    try {
      const bairro = await prisma.produtopedido.create({
        data: { idproduto, idpedido },
      });
      return res.send("Produto pedido cadastrado com sucesso!");
    } catch (err) {
      console.error(err);
      return res.status(500).send("Erro ao cadastrar o produtopedido");
    }
  }
}