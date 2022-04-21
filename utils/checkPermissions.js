import { UnauthenticatedError } from '../errors/index.js';

const checkPermissions = (reqUser, resoureUserId) => {
  if (reqUser.userId === resoureUserId.toString()) return;
  throw new UnauthenticatedError('你無權存取此路由');
};

export default checkPermissions;
