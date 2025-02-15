import { getAllUsersService } from './user.service';
import { type Request, type Response } from 'express';
import { type JsonResponse } from '../../types/routing';
import { type IUser } from './User.model';

export const getAllUsersController = async (
  _req: Request,
  res: Response<JsonResponse<IUser[]>>,
): Promise<void> => {
  const data = await getAllUsersService();
  res.json({
    message: 'Successful find users',
    data,
  });
};
