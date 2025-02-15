import { startServer } from './server';
import { initMongoDB } from './db/initMongoConnection';

const bootstrap = async (): Promise<void> => {
  await initMongoDB();
  startServer();
};

void bootstrap();
