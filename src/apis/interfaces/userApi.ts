import { UserType, LoginType } from "../../types/user";

export interface userApi {
  login(user: LoginType): Promise<void>;
  getUserList(): Promise<UserType[]>;
  getUser(userIdx: number): Promise<UserType>;
  updateUser(userIdx: number, updatedUser: UserType): Promise<void>;
  deleteUser(userIdx: number): Promise<void>;
}
