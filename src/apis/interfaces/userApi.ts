import UserType from "../../types/user";

export interface userApi {
  getUserList(): Promise<UserType[]>;
  getUser(userIdx: number): Promise<UserType>;
}
