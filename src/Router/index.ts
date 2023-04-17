import { Router } from 'express';
import cliente from './cliente';
import produto from './produto';
import cidade from './cidade';
import bairro from './bairro';
import endereco from './endereco';
import pedido from './pedido/pedido';
import produtopedido from './produtopedido/produtopedido';

const router = Router();

router.use("/cliente", cliente)
router.use("/produto", produto)
router.use("/cidade", cidade)
router.use("/bairro", bairro)
router.use("/endereco", endereco)
router.use("/pedido", pedido)
router.use("/produtopedido", produtopedido)

export default router;