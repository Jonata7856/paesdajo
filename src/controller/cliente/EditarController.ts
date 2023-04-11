import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";

export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idcliente, nome, telefone } = req.body;
    const clienteAtualizado = await prismaClient.cliente.update({
      where: { idcliente },
      data: { nome, telefone }
    });

    return res.send("Cliente atualizado com sucesso!")
  }
}