import { Request, Response } from "express";
import prismaClient from "../../database/PrismaClient";

export class EditarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { idenderecocliente, idcliente, numero, complemento, idbairro } = req.body;

    // Validações
    if (!idenderecocliente || isNaN(idenderecocliente)) {
      return res.status(400).send("O campo 'idenderecocliente' é obrigatório e deve ser um número.");
    }

    if (!idcliente || isNaN(idcliente)) {
      return res.status(400).send("O campo 'idcliente' é obrigatório e deve ser um número.");
    }

    if (!numero || numero.trim().length === 0) {
      return res.status(400).send("O campo 'numero' é obrigatório.");
    }

    if (idbairro && isNaN(idbairro)) {
      return res.status(400).send("O campo 'idbairro' deve ser um número.");
    }

    try {
      const enderecoAtualizado = await prismaClient.enderecocliente.update({
        where: { idenderecocliente },
        data: { idcliente, numero, complemento, idbairro },
      });
      return res.send("Endereço do cliente atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar endereço do cliente:", error);
      return res.status(500).send("Erro ao atualizar endereço do cliente.");
    }
  }
}
