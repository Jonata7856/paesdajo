import { Router } from 'express';
import cliente from './cliente';
import produto from './produto';
import cidade from './lista-cidade';
import bairro from './bairro';

const router = Router();

router.use("/cliente", cliente)
router.use("/produto", produto)
router.use("/cidade", cidade)
router.use("/bairro", bairro)

export default router;