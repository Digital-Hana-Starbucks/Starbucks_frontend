import UserType from "../../types/user";

export interface userApi {
  getUserList(): Promise<UserType[]>;
  getUser(userIdx: number): Promise<UserType>;
  updateUser(userIdx: number, updatedUser: UserType): Promise<void>;
  deleteUser(userIdx: number): Promise<void>;
}
