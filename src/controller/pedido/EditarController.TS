import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";
// EDITA O PEDIDO 
export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idpedido, idcliente, idenderecocliente, valortotal } = req.body;
    const bairroAtualizado = await prismaClient.pedido.update({
      where: { idpedido },
      data: { idcliente, idenderecocliente, valortotal }
    });

    return res.send("Pedido atualizado com sucesso!")
  }
}