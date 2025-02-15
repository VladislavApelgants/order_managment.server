import { type NextFunction, type Request, type Response } from 'express';

type ExpressController = (
  req: Request<any>,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export const ctrlWrapper =
  (controller: ExpressController) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
