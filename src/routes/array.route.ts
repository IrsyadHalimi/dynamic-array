import { Router } from 'express';
import { processArrayRequest } from '../controllers/array.controller';

const router = Router();

router.get('/manipulate-inventory', processArrayRequest);

export default router;