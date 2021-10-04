import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes'

import '@shared/typeorm';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(process.env.APP_PRIVATE_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333! 🏆');
});