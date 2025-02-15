import { Router } from 'express';
import {createOrderController, retrieveUsersOrdersController} from "./order.controller";
import {validateBody, validateId} from "../../middlewares";
import {ctrlWrapper} from "../../utils/ctrlWrapper";
import {createOrderSchema} from "./order.validation";

const router = Router();

router.post('/', validateBody(createOrderSchema), ctrlWrapper(createOrderController));
router.get('/:userId', validateId('userId'), ctrlWrapper(retrieveUsersOrdersController));
export default router;