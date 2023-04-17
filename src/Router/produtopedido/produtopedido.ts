import { Router, request, response }  from "express";
import {CadastroController} from '../../controller/produtopedido/CadastroController';
import { BuscaController} from '../../controller/produtopedido/BuscaController';
import { EditarController } from '../../controller/produtopedido/EditarController';

const produtopedido = Router();
produtopedido.post("/cadastro", new CadastroController().handle)
produtopedido.get("/busca/:id", new BuscaController().handle)
produtopedido.post("/editar", new EditarController().handle)

export default produtopedido;