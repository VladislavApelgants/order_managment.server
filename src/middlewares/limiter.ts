import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  handler: (_req, res) => {
    res.status(429).json({
      message: 'You have exceeded the 10 requests per minute limit. Please try again later.',
      error: 'Too many requests',
    });
  },
});

