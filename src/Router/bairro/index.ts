import { Router, Request, Response } from 'express';
import { BairroController } from '../../controller/bairro/BairroController';
import { CadastrobairroController } from '../../controller/bairro/CadastrobairroController';

const  bairro = Router();

bairro.get("/busque/:id", new BairroController().handle)
bairro.post("/cadastro", new CadastrobairroController ().handle)

export default bairro;