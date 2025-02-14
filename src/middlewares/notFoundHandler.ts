import { RequestHandler  } from 'express';

export const notFoundHandler:RequestHandler = (_req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
};
