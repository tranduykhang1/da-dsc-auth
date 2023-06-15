import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IUpdateProfile } from "./interfaces/user.interface";

export class DscAPI {
  private _refreshToken: string = "";
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({});
  }

  init(input: { url: string; appId: string }) {
    const { url, appId } = input;
    this.axiosInstance.defaults.baseURL = `${url}/${appId}`;
    this.axiosInstance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  _setToken(token: string): void {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  async login(token: string): Promise<any> {
    const url = `/login`;

    try {
      const res: AxiosResponse = await this.axiosInstance.post(url, {
        token,
      });
      this._setToken(res.data.data.at);
      this._refreshToken = res.data.data.rt;
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async googleLogin(token: string): Promise<any> {
    const url = `/google/login`;

    try {
      const res: AxiosResponse = await this.axiosInstance.post(url, {
        token,
      });
      this._setToken(res.data.data.at);
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async kakaoLogin(token: string): Promise<any> {
    const url = `/kakao/login`;
    try {
      const res: AxiosResponse = await this.axiosInstance.post(url, {
        token,
      });
      this._setToken(res.data.data.at);
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async register(input: {
    email: string;
    password: string;
    displayName: string;
  }): Promise<any> {
    const url = `/register`;

    try {
      const res: AxiosResponse = await this.axiosInstance.post(url, input);
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async getProfile(): Promise<any> {
    const url = `/profile`;
    try {
      console.log(this.axiosInstance.defaults);
      const res: AxiosResponse = await this.axiosInstance.get(url);
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async updateProfile(input: IUpdateProfile): Promise<any> {
    const url = `/profile`;
    try {
      const res: AxiosResponse = await this.axiosInstance.patch(url, input);
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }

  async refreshToken(): Promise<any> {
    const url = `/refresh-token`;
    try {
      const res: AxiosResponse = await this.axiosInstance.post(url, {
        token: this._refreshToken,
      });
      return res.data;
    } catch (err: any) {
      return err?.response?.data;
    }
  }
}
