import axios, { AxiosInstance } from "axios";
import { menuApi } from "./interfaces/menuApi";
import { API_BASE_URL } from "./url";
import { getCookie } from "../utils/cookie";
import MenuType from "../types/menu";

export class ApiClient implements menuApi {
  private static instance: ApiClient;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = this.createAxiosInstance();
  }

  // API 작성 시 아래 처럼 작성해야함
  async getMenuList() {
    const response = await this.axiosInstance.request<MenuType[]>({
      method: "get",
      url: `/products`,
    });
    return response.data;
  }

  async getMenu(menuIdx: number) {
    const response = await this.axiosInstance.request<MenuType>({
      method: "get",
      url: `/products/${menuIdx}`,
    });
    return response.data;
  }

  static getInstance(): ApiClient {
    return this.instance || (this.instance = new this());
  }

  registerToken(newToken: string) {
    this.axiosInstance = this.createAxiosInstance(newToken);
  }

  logout() {
    this.axiosInstance = this.createAxiosInstance();
  }

  private createAxiosInstance = (token?: string) => {
    const headers: any = {
      "content-type": "application/json",
    };

    const newInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 100000,
      headers,
    });

    newInstance.interceptors.request.use(
      (config) => {
        if (token) {
          const accessToken = getCookie(token);
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        config.headers["Content-Type"] = "application/json";

        return config;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      },
    );

    return newInstance;
  };
}
