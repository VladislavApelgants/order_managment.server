import { type Request } from 'express';
import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  keyGenerator: (req: Request) => {
    return req.body.userId || req.params.userId || req.ip;
  },
  handler: (_req, res) => {
    res.status(429).json({
      message: 'Too many requests',
      data: {
        message:
          'You have exceeded the limit of 10 requests per minute. Please try again later.',
      },
    });
  },
});
