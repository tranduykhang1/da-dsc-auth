import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { catchError, firstValueFrom } from "rxjs";
import { IUpdateProfile } from "../interfaces/user.interface";

@Injectable()
export class DscService {
  constructor(private readonly httpService: HttpService) {}

  setHeaders(token: string): any {
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  async login(token: string): Promise<any> {
    const url = `/login`;

    const { data } = await firstValueFrom(
      await this.httpService
        .post(url, {
          token,
        })
        .pipe(
          catchError((err) => {
            throw err?.response?.data;
          })
        )
    );

    return data;
  }

  async googleLogin(token: string): Promise<any> {
    const url = `/google/login`;

    const { data } = await firstValueFrom(
      await this.httpService
        .post(url, {
          token,
        })
        .pipe(
          catchError((err) => {
            throw err?.response?.data;
          })
        )
    );

    return data;
  }

  async kakaoLogin(token: string): Promise<any> {
    const url = `/kakao/login`;

    const { data } = await firstValueFrom(
      await this.httpService
        .post(url, {
          token,
        })
        .pipe(
          catchError((err) => {
            throw err?.response?.data;
          })
        )
    );

    return data;
  }

  async register(input: {
    email: string;
    password: string;
    displayName: string;
  }): Promise<any> {
    const url = `/register`;

    const { data } = await firstValueFrom(
      await this.httpService.post(url, input).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );

    return data;
  }

  async getProfile(token: string): Promise<any> {
    const url = `/profile`;

    const headers = this.setHeaders(token);
    const { data } = await firstValueFrom(
      await this.httpService.get(url, { headers }).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );

    return data;
  }

  async updateProfile(token: string, input: IUpdateProfile): Promise<any> {
    const url = `/profile`;

    const headers = this.setHeaders(token);

    const { data } = await firstValueFrom(
      await this.httpService.patch(url, input, { headers }).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );
    return data;
  }

  async updateProfileById(userId: string, input: IUpdateProfile): Promise<any> {
    const url = `/${userId}/profile`;

    const { data } = await firstValueFrom(
      await this.httpService.patch(url, input).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );
    return data;
  }

  async deleteUserById(userId: string): Promise<any> {
    const url = `/${userId}`;

    const { data } = await firstValueFrom(
      await this.httpService.delete(url).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );
    return data;
  }

  async forgotPassword(email: string): Promise<any> {
    const url = `/forgot-password`;

    const { data } = await firstValueFrom(
      await this.httpService.post(url, { email }).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );
    return data;
  }

  async refreshToken(token: string): Promise<any> {
    const url = `/refresh-token`;

    const { data } = await firstValueFrom(
      await this.httpService.post(url, { token }).pipe(
        catchError((err) => {
          throw err?.response?.data;
        })
      )
    );
    return data;
  }
}
