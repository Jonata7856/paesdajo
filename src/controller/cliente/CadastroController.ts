import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";
export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, telefone } = req.body;
    const clienteExistente = await prismaClient.cliente.findFirst({
      where: { telefone },
    });
    if (clienteExistente) {
      return res.status(400).send("Número de telefone já possui registro no sistema!");
    }
    await prismaClient.cliente.create({ data: { nome, telefone } });
    return res.send("Cliente cadastrado");
  }
}
