import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";


export class BuscaController {
  async handle(req: Request, res: Response): Promise<Response> {
    let cliente;
    if (req.params.id) {
      cliente = await prisma.cliente.findFirst({
        where: {
            idcliente: parseInt(req.params.id),
        },
      });
    } else {
      cliente= await prisma.cliente.findMany();
    }
    return res.send(cliente);
  }
}