import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  // headers裡面的屬性是小寫
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('憑證無效');
  }
  // authHeader.split(" ")[0] = 'Bearer';
  const token = authHeader.split(' ')[1];
  try {
    // createJWT在User.js裡
    // verify 用於解碼 須帶入要驗證的token跟自訂的密鑰 回傳payload
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError('憑證無效');
  }
};

export default auth;
