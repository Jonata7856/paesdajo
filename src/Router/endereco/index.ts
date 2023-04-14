import { Router, Request, Response } from 'express';
import { CadastroController } from '../../controller/endereco/CadastroController';
import { EditarController } from '../../controller/endereco/EditarController';


const endereco = Router();

endereco.post("/cadastro", new CadastroController().handle)
endereco.post("/editar", new EditarController().handle)

export default endereco;