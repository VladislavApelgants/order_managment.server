import express from 'express';
import cors from 'cors';
import { randomUUID } from 'crypto';
import pino from 'pino-http';
import { errorHandler, notFoundHandler } from './middlewares';
import { env, ENV_VARS } from './utils/env';
import orderRouter from "./modules/order/order.router";

export const startServer = (): void => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(
    pino({
      genReqId: () => randomUUID(),
    }),
  );

  app.use("/orders", orderRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = Number(env(ENV_VARS.PORT));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
