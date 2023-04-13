
import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
//CONSULTA TODOS OS BAIRRO QUE ESTÃO ATRIBUIDO AO IDCIDADE PASSADO
export class BairroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const idcidade = Number(req.params.idcidade); 
    console.log(req.params)
    const bairro = await prisma.bairro.findMany({
      where: { idcidade: Number(req.params.id) }
    });
    
    return res.send(bairro);
  }
}

