import { Router } from 'express';
import {createOrderController} from "./order.controller";
import {validateBody} from "../../middlewares";
import {ctrlWrapper} from "../../utils/ctrlWrapper";
import {createOrderSchema} from "./validation/orderShema";


const router = Router();

router.post('/', validateBody(createOrderSchema), ctrlWrapper(createOrderController));


export default router;