import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper';
import { getAllUsersController } from './user.controller';

const router = Router();

router.get('/', ctrlWrapper(getAllUsersController));

export default router;
