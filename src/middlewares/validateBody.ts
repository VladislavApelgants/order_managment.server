import createHttpError from 'http-errors';
import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

interface ErrorDetails {
  message: string;
  path: string[];
  type: string;
  context: {
    key: string;
    label: string;
    value: unknown;
  };
}

export const validateBody = (schema: ObjectSchema) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      const errorMessages = (error.details as ErrorDetails[]).map(err => err.message);
      const er = createHttpError(400, 'Bad request', {
        errors: errorMessages,
      });
      next(er);
    }
  };
};
