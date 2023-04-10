import { Router, Request, Response } from 'express';
import { CadastroproController } from '../../controller/produto/CadastroproController';
import { BuscaController } from '../../controller/produto/BuscaController';

const produto = Router();
produto.post("/cadastro", new CadastroproController().handle)
produto.get("/busca", new BuscaController().handle)
produto.get("/busca/:id", new BuscaController().handle)

export default produto;