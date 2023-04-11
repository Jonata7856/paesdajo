import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";

export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idproduto, nome, descricao, valor } = req.body;
    const ProdutoAtualizado = await prismaClient.produto.update({
      where: { idproduto },
      data: { nome, descricao, valor }
    });

    return res.send("Produto atualizado com sucesso!")
  }
}