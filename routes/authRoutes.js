import express from 'express';
const router = express.Router();
import { register, login, updateUser } from '../controllers/authController.js';
import AuthenticateUser from '../middleware/auth.js';
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: '過多請求，請於十五分鐘後再試',
});

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.patch('/updateUser', AuthenticateUser, updateUser);

export default router;
