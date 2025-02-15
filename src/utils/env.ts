import 'dotenv/config';

export enum ENV_VARS {
  PORT = 'PORT',
  MONGODB_USER = 'MONGODB_USER',
  MONGODB_PASSWORD = 'MONGODB_PASSWORD',
  MONGODB_URL = 'MONGODB_URL',
  MONGODB_DB = 'MONGODB_DB',
}

export function env(name: ENV_VARS): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }

  return value;
}
