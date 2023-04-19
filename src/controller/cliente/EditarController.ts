import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";

export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idcliente, nome, telefone } = req.body;
    const clienteExistente = await prismaClient.cliente.findUnique({
      where: { idcliente },
    });

    if (!clienteExistente) {
      return res.status(404).send("Cliente não encontrado");
    }

    const clienteAtualizado = await prismaClient.cliente.update({
      where: { idcliente },
      data: { nome, telefone },
    });

    return res.send("Cliente atualizado com sucesso!");
  }
}
