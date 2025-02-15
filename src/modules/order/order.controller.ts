import {type Request, type Response} from 'express';
import {createOrderService, retrieveUsersOrdersService} from "./order.service";
import {JsonResponse} from "../../types/routing";
import {IOrder} from "./Order.model";
import {CreateOrderBody, CreateOrderRes, RetrieveUsersOrdersParams} from "./order.types";

export const createOrderController = async (
    req: Request<unknown, JsonResponse<IOrder>, CreateOrderBody>,
    res: Response<JsonResponse<CreateOrderRes>>) => {

    const order = await createOrderService(req.body);

    res.status(201).json({
        message: 'Order created successfully',
        data: {
            userId: order.userId,
            productId: order.productId,
            quantity: order.quantity,
            totalPrice: parseFloat(order.totalPrice.toString()),
        },
    });
};


export const retrieveUsersOrdersController = async (
    req:Request<RetrieveUsersOrdersParams>,
    res:Response<JsonResponse<IOrder[]>>) => {
    const data = await retrieveUsersOrdersService(req.params.userId);
    res.status(200).json({
        message: "Orders retrieved successfully",
        data
    });
};