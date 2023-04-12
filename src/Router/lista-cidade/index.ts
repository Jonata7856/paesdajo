import { Router, Request, Response } from 'express';
import { CidadeController } from '../../controller/lista-cidade/CidadeController';

const  cidade = Router();

cidade.get("/busca/:id", new CidadeController().handle)

export default cidade;