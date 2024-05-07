import axios, { AxiosInstance } from "axios";
import { menuApi } from "./interfaces/menuApi";
import { API_BASE_URL } from "./url";
import { getCookie } from "../utils/cookie";
import { MenuType } from "../types/menu";
import { OrderType, updateOrderType } from "../types/order";
import { orderApi } from "./interfaces/orderApi";
import { userApi } from "./interfaces/userApi";
import UserType from "../types/user";

export class ApiClient implements menuApi, orderApi, userApi {
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

  async deleteMenu(menuIdx: number) {
    const response = await this.axiosInstance.request<void>({
      method: "delete",
      url: `/products/admin/${menuIdx}`,
    });
    return response.data;
  }
  async updateMenu(index: number, newMenu: FormData) {
    const axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 100000,
    });

    const response = await axiosInstance.request<void>({
      method: "put",
      url: `/products/admin/${index}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: newMenu,
    });

    return response.data;
  }

  //------order------
  async getOrderList() {
    const response = await this.axiosInstance.request<OrderType[]>({
      method: "get",
      url: `/orders`,
    });
    return response.data;
  }

  async updateOrder(orderIdx: number, status: updateOrderType) {
    const response = await this.axiosInstance.request<void>({
      method: "put",
      url: `/orders/admin/${orderIdx}`,
      data: status,
    });
    return response.data;
  }

  async deleteOrder(orderIdx: number) {
    const response = await this.axiosInstance.request<void>({
      method: "delete",
      url: `/orders/admin/${orderIdx}`,
    });
    return response.data;
  }

  //-----------user
  async getUserList() {
    const response = await this.axiosInstance.request<UserType[]>({
      method: "get",
      url: `/users`,
    });
    return response.data;
  }

  async getUser(userIdx: number) {
    const response = await this.axiosInstance.request<UserType>({
      method: "get",
      url: `/users/${userIdx}`,
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
