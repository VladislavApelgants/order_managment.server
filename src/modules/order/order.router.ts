import { Router } from 'express';
import {
  createOrderController,
  retrieveUsersOrdersController,
} from './order.controller';
import { limiter, validateBody, validateId } from '../../middlewares';
import { ctrlWrapper } from '../../utils/ctrlWrapper';
import { createOrderSchema } from './order.validation';

const router = Router();

router.post(
  '/',
  limiter,
  validateBody(createOrderSchema),
  ctrlWrapper(createOrderController),
);
router.get(
  '/:userId',
  limiter,
  validateId('userId'),
  ctrlWrapper(retrieveUsersOrdersController),
);
export default router;
