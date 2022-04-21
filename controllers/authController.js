import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';
import bcrypt from 'bcryptjs';

const register = async (req, res, next) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    throw new BadRequestError('尚有資料未填寫');
  }

  // const AllUser = await User.find({}).select('+password');

  const emailAlreadyExist = await User.findOne({ email });

  if (emailAlreadyExist) {
    throw new BadRequestError('此電子信箱已經被註冊');
  }

  const user = await User.create({ name, password, email });
  const token = await user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      location: user.location,
      englishName: user.englishName,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    throw new BadRequestError('尚有資料未填寫');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnauthenticatedError('查無此帳戶');
  }
  console.log(user);

  const isPasswordCorrect = await user.passwordCompass(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('密碼錯誤');
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  const { email, name, englishName, location } = req.body;
  if (!email || !name || !location || !englishName) {
    throw new BadRequestError('尚有資料未填寫');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.englishName = englishName;
  user.location = location;

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export { register, login, updateUser };
