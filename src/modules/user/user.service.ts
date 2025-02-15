import { type IUser, UserModel } from './User.model';

export const getAllUsersService = async (): Promise<IUser[] | []> => {
  return await UserModel.find();
};
