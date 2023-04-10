import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
import produto from "../../Router/produto/index";

export class CadastroproController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, descricao, valor } = req.body;
    await prisma.produto.create({ data: { nome, descricao, valor } });

    return res.send("produto cadastrado com sucesso!")
  }
};
