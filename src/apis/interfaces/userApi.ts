import { LoginType } from "../../types/user";

export interface loginApi {
  login(user: LoginType): Promise<void>;
}
