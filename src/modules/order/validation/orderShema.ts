import Joi from 'joi';

export const createOrderSchema = Joi.object({
  userId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
    'string.base': 'userId should be a string',
    'any.required': 'userId is required',
    'string.pattern.base': 'userId must be a valid ObjectId',
  }),
  productId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
    'string.base': 'productId should be a string',
    'any.required': 'productId is required',
    'string.pattern.base': 'productId must be a valid ObjectId',
  }),
  quantity: Joi.number().min(1).messages({
    'number.base': 'quantity should be a number',
    'any.required': 'quantity is required',
    'number.min': 'quantity must be at least 1',
    'number.integer': 'quantity should be an integer',
    }),
});