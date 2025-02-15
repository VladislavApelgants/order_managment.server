import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper';
import { getAllProductsController } from './product.controller';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));

export default router;
