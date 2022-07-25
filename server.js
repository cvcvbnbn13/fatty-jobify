import express from 'express';
const app = express();
import dotenv from 'dotenv';
import 'express-async-errors';
// import cors from 'cors';
dotenv.config();
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// db and auth
import connectDB from './db/connect.js';

// routers
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import AuthenticateUser from './middleware/auth.js';

// security
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// app.use(cors());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// import.meta.url = file:///C:/Users/CJS/Desktop/jobify/server.js
// __dirname = C:\Users\CJS\Desktop\jobify
// dirname的目的在返回目錄(這個資料夾)的位置
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', AuthenticateUser, jobRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log('here!!');
    });
  } catch (error) {
    console.log(error);
  }
};

start();

console.log(__dirname);
