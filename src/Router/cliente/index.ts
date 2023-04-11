import { Router, Request, Response } from 'express';
import { CadastroController } from '../../controller/cliente/CadastroController';
import { BuscaController} from '../../controller/cliente/BuscaController';
import { EditarController} from '../../controller/produto/EditarController';

const cliente = Router();
cliente.post("/cadastro", new CadastroController().handle)
cliente.get("/busca", new BuscaController().handle)
cliente.get("/busca/:id", new BuscaController().handle)
cliente.post("/Editar", new EditarController().handle)

export default cliente;