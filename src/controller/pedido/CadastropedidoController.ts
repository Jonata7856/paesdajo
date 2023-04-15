import { Request, Response } from "express";
import prisma from "../../database/PrismaClient";
import Joi from 'joi';

const schema = Joi.object({
  idcliente: Joi.string().max(255).required(),
  idenderecocliente: Joi.string().max(255).required(),
  valortotal: Joi.number().min(0).precision(2).required()
});

export class CadastropedidoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { idcliente, idenderecocliente, valortotal } = await schema.validateAsync(req.body);

      // Verifica se o cliente e endereço existem no banco de dados
      const clienteExists = await prisma.cliente.findUnique({ where: { idcliente: idcliente } });
      if (!clienteExists) {
        return res.status(400).json({ error: "Cliente não encontrado" });
      }

      const enderecoExists = await prisma.enderecocliente.findUnique({ where: { idenderecocliente: idenderecocliente } });
      if (!enderecoExists) {
        return res.status(400).json({ error: "Endereço não encontrado" });
      }

      // Cria o pedido no banco de dados
      const pedido = await prisma.pedido.create({ data: { idcliente, idenderecocliente, valortotal } });
      
      return res.status(201).json(pedido);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "Dados inválidos" });
    }
  }
}
