import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";
// EDITA O BAIRRO 
export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idprodutopedido, idproduto, idpedido  } = req.body;
    const produtopedidoAtualizado = await prismaClient.produtopedido.update({
      where: { idprodutopedido },
      data: { idproduto, idpedido }
    });

    return res.send("produtopedido atualizado com sucesso!")
  }
}