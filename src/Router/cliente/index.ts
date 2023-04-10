import { Router, Request, Response } from 'express';
import { CadastroController } from '../../controller/cliente/CadastroController';

const cliente = Router();
cliente.post("/cadastro", new CadastroController().handle)

export default cliente;