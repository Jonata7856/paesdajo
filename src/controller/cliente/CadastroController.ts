import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, telefone } = req.body;
    await prisma.cliente.create({ data: { nome, telefone } });
    return res.send("Cliente cadastrado")
  }
}
