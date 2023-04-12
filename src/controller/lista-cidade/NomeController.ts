import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
import cidade from "../../Router/lista-cidade";
import { log } from "console";


export class NomeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const nomeCidade = req.params.nome;
    const cidade = await prisma.cidade.findFirst({
      where: {
        nome: (nomeCidade.toUpperCase()),
      },
    });    
    return res.send(cidade);
  }
}
 