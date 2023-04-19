import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";


export class BuscaController {
  async handle(req: Request, res: Response): Promise<Response> {
    let cliente;

    if (req.params.id) {
      const idCliente = parseInt(req.params.id);
      const clienteExistente = await prisma.cliente.findUnique({
        where: { idcliente: idCliente },
      });

      if (!clienteExistente) {
        return res.status(404).send("Cliente não encontrado nos registros!");
      }

      cliente = await prisma.cliente.findFirst({
        where: { idcliente: idCliente },
      });
    } else {
      cliente = await prisma.cliente.findMany();
    }

    return res.send(cliente);
  }
}

