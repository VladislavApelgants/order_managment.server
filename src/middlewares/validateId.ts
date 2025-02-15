import { type NextFunction, type Request, type Response } from 'express';
import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (paramName: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const id = req.params[paramName];
    if (!isValidObjectId(id)) {
      next(createHttpError(400, 'ID is not valid'));
      return;
    }
    next();
  };
};
