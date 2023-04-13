import { Router, Request, Response } from 'express';
import { BairroController } from '../../controller/bairro/BairroController';
import { CadastrobairroController } from '../../controller/bairro/CadastrobairroController';
import { EditarController} from '../../controller/bairro/EditarController';
import { ExcluiController} from '../../controller/bairro/ExcluiController';

const  bairro = Router();

bairro.get("/busque/:id", new BairroController().handle)
bairro.post("/cadastro", new CadastrobairroController ().handle)
bairro.post("/editar", new EditarController().handle)
bairro.delete("/excluir/:id", new ExcluiController().handle)

export default bairro;