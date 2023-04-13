import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";
// EDITA O BAIRRO 
export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idbairro, nome, idcidade, valortele } = req.body;
    const bairroAtualizado = await prismaClient.bairro.update({
      where: { idbairro },
      data: { nome, idcidade, valortele }
    });

    return res.send("Bairro atualizado com sucesso!")
  }
}