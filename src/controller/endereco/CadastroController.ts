import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idcliente, endereco, numero, complemento, idbairro } = req.body;
    await prisma.enderecocliente.create({ data: { idcliente, endereco, numero, complemento, idbairro } });
    return res.send("Endereço cliente cadastrado com sucesso!")
  }
}
