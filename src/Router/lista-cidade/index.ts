import { Router, Request, Response } from 'express';
import { CidadeController } from '../../controller/lista-cidade/CidadeController';
import { NomeController } from '../../controller/lista-cidade/NomeController';
import { idCidadeController } from '../../controller/lista-cidade/idCidadeController';


const  cidade = Router();

cidade.get("/busca/:id", new CidadeController().handle)
cidade.get("/busca", new CidadeController().handle)
cidade.get("/encontre/:nome", new NomeController().handle)
cidade.get("/traga/:idcidade", new idCidadeController().handle)


export default cidade;