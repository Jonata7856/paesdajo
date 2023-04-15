import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idcliente, endereco, numero, complemento, idbairro } = req.body;

    if (!idcliente || isNaN(idcliente)) {
      return res.status(400).send("O campo 'idcliente' é obrigatório e deve ser um número.");
    }
    if (!endereco || endereco.trim().length === 0) {
      return res.status(400).send("O campo 'endereco' é obrigatório.");
    }
    if (!numero || numero.trim().length === 0) {
      return res.status(400).send("O campo 'numero' é obrigatório.");
    }
    if (idbairro && isNaN(idbairro)) {
      return res.status(400).send("O campo 'idbairro' deve ser um número.");
    }
    try {
      await prisma.enderecocliente.create({
        data: { idcliente, endereco, numero, complemento, idbairro },
      });
      return res.send("Endereço cliente cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar endereço do cliente:", error);
      return res.status(500).send("Erro ao cadastrar endereço do cliente.");
    }
  }
}
