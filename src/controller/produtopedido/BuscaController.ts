import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
import produtopedido from "../../Router/produtopedido/produtopedido";

export class BuscaController  {
  async handle(req: Request, res: Response): Promise<Response> {
    const idpedido = Number(req.params.idpedido); 
    console.log(req.params)
    const produtopedido = await prisma.produtopedido.findMany({
      where: { idpedido: Number(req.params.id) }
    });
    
    return res.send(produtopedido);
  }
}