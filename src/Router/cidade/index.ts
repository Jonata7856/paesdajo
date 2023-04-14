import { Router, Request, Response } from 'express';
import { CidadeController } from '../../controller/cidade/CidadeController';
import { NomeController } from '../../controller/cidade/NomeController';
import { idCidadeController } from '../../controller/cidade/idCidadeController';


const  cidade = Router();

cidade.get("/busca/:id", new CidadeController().handle)
cidade.get("/busca", new CidadeController().handle)
cidade.get("/encontre/:nome", new NomeController().handle)
cidade.get("/traga/:idcidade", new idCidadeController().handle)


export default cidade;