import { type Request, type RequestHandler, type Response } from 'express';

export const notFoundHandler: RequestHandler = (
  _req: Request,
  res: Response,
) => {
  res.status(404).json({ message: 'Not found' });
};
