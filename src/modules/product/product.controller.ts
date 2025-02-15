import { type Request, type Response } from 'express';
import { type JsonResponse } from '../../types/routing';
import { type IProduct } from './Product.model';
import { getAllProductsService } from './product.service';

export const getAllProductsController = async (
  _req: Request,
  res: Response<JsonResponse<IProduct[]>>,
): Promise<void> => {
  const data = await getAllProductsService();
  res.json({
    message: 'Successful find users',
    data,
  });
};
