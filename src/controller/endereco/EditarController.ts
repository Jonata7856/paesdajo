import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";

export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idenderecocliente, idcliente, numero, complemento, idbairro } = req.body;
    const enderecoAtualizado = await prismaClient.enderecocliente.update({
      where: { idenderecocliente },
      data: { idcliente, numero, complemento, idbairro }
    });

    return res.send("Endereço do cliente atualizado com sucesso!")
  }
}