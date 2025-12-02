import 'dotenv/config';
import express from 'express';
import ChannelRouter from './routes';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';

export const frontId = process.env.FRONT_ID || '';
export const frontSecret = process.env.FRONT_SECRET || '';
export const frontUrl = process.env.FRONT_URL || 'https://api2.frontapp.com';
export const callbackHostname = process.env.VERCEL_URL || process.env.CALLBACK_HOSTNAME || '';
export const serverPort = process.env.SERVER_PORT || '3000';

export function randomString(length: number): string {
  return randomBytes(Math.floor(length / 2)).toString('hex');
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ChannelRouter);

app.listen(serverPort, () => {
  console.log(`Express server listening on port ${serverPort}`);
});
