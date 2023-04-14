import { Router, Request, Response } from 'express';
import { CadastroController } from '../../controller/endereco/CadastroController';
import { EditarController } from '../../controller/endereco/EditarController';
import { BuscaController} from '../../controller/endereco/BuscaController';

const endereco = Router();

endereco.post("/cadastro", new CadastroController().handle)
endereco.post("/editar", new EditarController().handle)
endereco.get("/busca/:id", new BuscaController().handle)

export default endereco;