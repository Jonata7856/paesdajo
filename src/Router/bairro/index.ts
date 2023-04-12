import { Router, Request, Response } from 'express';

import { BairroController } from '../../controller/bairro/BairroController';

const  bairro = Router();

bairro.get("/busque/:id", new BairroController().handle)

export default bairro;