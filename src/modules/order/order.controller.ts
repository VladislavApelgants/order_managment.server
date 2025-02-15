import { type Request, type Response } from 'express';
import {
  createOrderService,
  retrieveUsersOrdersService,
} from './order.service';
import { type JsonResponse } from '../../types/routing';
import { type IOrder } from './Order.model';
import {
  type CreateOrderBody,
  type CreateOrderRes,
  type RetrieveUsersOrdersParams,
} from './order.types';

export const createOrderController = async (
  req: Request<unknown, JsonResponse<IOrder>, CreateOrderBody>,
  res: Response<JsonResponse<CreateOrderRes>>,
): Promise<void> => {
  const order = await createOrderService(req.body);

  res.status(201).json({
    message: 'Order created successfully',
    data: {
      _id: order._id,
      userId: order.userId,
      productId: order.productId,
      quantity: order.quantity,
      totalPrice: parseFloat(order.totalPrice.toString()),
    },
  });
};

export const retrieveUsersOrdersController = async (
  req: Request<RetrieveUsersOrdersParams>,
  res: Response<JsonResponse<IOrder[]>>,
): Promise<void> => {
  const data = await retrieveUsersOrdersService(req.params.userId);
  res.status(200).json({
    message: 'Orders retrieved successfully',
    data,
  });
};
