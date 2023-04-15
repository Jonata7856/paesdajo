import { Router, request, response }  from "express";
import {CadastropedidoController} from '../../controller/pedido/CadastropedidoController';
import { BuscaController} from '../../controller/pedido/BuscaController';
import { EditarController } from '../../controller/pedido/EditarController';

const pedido = Router();
pedido.post("/cadastro", new CadastropedidoController().handle)
pedido.get("/busca/:id", new BuscaController().handle)
pedido.post("/editar", new EditarController().handle)

export default pedido;