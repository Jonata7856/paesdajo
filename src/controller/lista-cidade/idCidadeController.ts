import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
import cidade from "../../Router/lista-cidade";
import { log } from "console";


export class idCidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const idcidade = Number(req.params.idcidade);
    const cidade = await prisma.cidade.findUnique({
      where: {
        idcidade: idcidade,
      },
    });    
    return res.send(cidade);
  }
}