import { Router } from 'express';
import cliente from './cliente';
import produto from './produto';

const router = Router();

router.use("/cliente", cliente)
router.use("/produto", produto)

export default router;