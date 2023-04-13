import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";

export class CadastrobairroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, idcidade, valortele } = req.body;

    // Validar os dados de entrada
    if (!nome || !idcidade || !valortele) {
      return res.status(400).send("Dados de entrada inválidos");
    }

    // Cadastrar o bairro no banco de dados
    try {
      const bairro = await prisma.bairro.create({
        data: { nome, idcidade, valortele },
      });
      return res.send("Bairro cadastrado com sucesso!");
    } catch (err) {
      console.error(err);
      return res.status(500).send("Erro ao cadastrar o bairro");
    }
  }
}
