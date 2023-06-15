import { HttpStatusCode } from "axios";
import { DscAPI } from "../lib";

const dscAPI = new DscAPI();

dscAPI.init({ url: "http://localhost:3000/api/v1/app", appId: "1000001" });

const appToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ1c2VyMUB1c2VyLmNvbSIsInRvayI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYVdRaU9pSXhNak0wTlRZM09Ea3dJbjAuT05JaEZKS3pJclc4aWpReW0zbV9iZWwtQngxWGNiT0liQVVGSlpNX3FyZyJ9.2hczY1AEFFv9hyxFqwlFfdMR555E7JW1nfJhc5i_wKE",
  invalidAppToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ1c2VyMUB1c2VyLmNvbSIsInRvayI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYVdRaU9pSXhNak0wTlRZM09Ea3dJbjAuT05JaEZKS3pJclc4aWpReW0zbV9iZWwtQngxWGNiT0liQVVGSlpNX3FyZyJ9.2hczY1AEFFv9hyxFqwlFfdMR555E7JW1nfJhc5i_wKG",
  googleToken =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1YmE5MzEzZmQ3YTdkNGFmYTg0ODg0YWJjYzg0MDMwMDQzNjMxODAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjcxMzQ4MTM5NjA2LTkwNmY3bGNsOHZrNmwyNmhpdmMxa2EwaGsydGV1dmIxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjcxMzQ4MTM5NjA2LTkwNmY3bGNsOHZrNmwyNmhpdmMxa2EwaGsydGV1dmIxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExMTMyMTY3MjIwOTkwNTA5MTI4IiwiZW1haWwiOiJ0cmFuZHV5a2hhbmcxOTk5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTnlZVkk1MWxuME0wVWloVGVlMFVCZyIsIm5hbWUiOiJUcmFuIER1eSBLaGFuZyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRkaTVMWUFVeVFiWDlOYzBtbG1ST3lBNnhjVTdwQ3Y0NldKTHFqMGhnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlRyYW4iLCJmYW1pbHlfbmFtZSI6IkR1eSBLaGFuZyIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjg2NzMyNzA2LCJleHAiOjE2ODY3MzYzMDYsImp0aSI6IjZhYjEwYWI3NjAzYTIyOTlmMTAyODZiY2Y3NzY2YTNjOTlmY2U4NDAifQ.YCky0C3RX2g3H13mzn-eCgjbvvQ8fnXy1Ek0DsuDYaKAIIDRj2J-AxduLhotxKxQdN9hzqtiIcnCxuchNjaYjgN6B-H9KeV2P82cQ3_fav_EL4GRVsbauhJ4oT2foBxitjrorNFFtx7VZgLyuvUHB4K2IsuynPBGzeUhBk0dEmPKiy2itk0R-5RbgZePPSzCX-XKN7X84ocdKvDO7kEfTKhmicWR-OQZx7BMJ1sly9vMVRxXMyD5Hbc2WHzlGskjuLPRuNh3A3gZwdZw2a1959l8ev60gU02QBsEG3IdkQ7aT_3Kx4NgvglB_Uk0NNqGSOpeGTVtFuotsHYeLqg7aQ",
  invalidGoogleToken =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1YmE5MzEzZmQ3YTdkNGFmYTg0ODg0YWJjYzg0MDMwMDQzNjMxODAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjcxMzQ4MTM5NjA2LTkwNmY3bGNsOHZrNmwyNmhpdmMxa2EwaGsydGV1dmIxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjcxMzQ4MTM5NjA2LTkwNmY3bGNsOHZrNmwyNmhpdmMxa2EwaGsydGV1dmIxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExMTMyMTY3MjIwOTkwNTA5MTI4IiwiZW1haWwiOiJ0cmFuZHV5a2hhbmcxOTk5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTnlZVkk1MWxuME0wVWloVGVlMFVCZyIsIm5hbWUiOiJUcmFuIER1eSBLaGFuZyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRkaTVMWUFVeVFiWDlOYzBtbG1ST3lBNnhjVTdwQ3Y0NldKTHFqMGhnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlRyYW4iLCJmYW1pbHlfbmFtZSI6IkR1eSBLaGFuZyIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjg2NzMyNzA2LCJleHAiOjE2ODY3MzYzMDYsImp0aSI6IjZhYjEwYWI3NjAzYTIyOTlmMTAyODZiY2Y3NzY2YTNjOTlmY2U4NDAifQ.YCky0C3RX2g3H13mzn-eCgjbvvQ8fnXy1Ek0DsuDYaKAIIDRj2J-AxduLhotxKxQdN9hzqtiIcnCxuchNjaYjgN6B-H9KeV2P82cQ3_fav_EL4GRVsbauhJ4oT2foBxitjrorNFFtx7VZgLyuvUHB4K2IsuynPBGzeUhBk0dEmPKiy2itk0R-5RbgZePPSzCX-XKN7X84ocdKvDO7kEfTKhmicWR-OQZx7BMJ1sly9vMVRxXMyD5Hbc2WHzlGskjuLPRuNh3A3gZwdZw2a1959l8ev60gU02QBsEG3IdkQ7aT_3Kx4NgvglB_Uk0NNqGSOpeGTVtFuotsHYeLqg7aG",
  kakaoLogin = "BU5AvpL-O1YznJxfvoYsbKLLrIS9i9wgXum5wCmzCinI2AAAAYi5KmTl",
  invalidKakaoLogin =
    "BU5AvpL-O1YznJxfvoYsbKLLrIS9i9wgXum5wCmzCinI2AAAAYi5KmTI";

const newAccount = {
  email: `test-dsc@test.com`,
  password: "123123123",
  displayName: `Test dsc-auth`,
};

interface IUpdateProfile {
  displayName?: string;
  gender?: string;
}

describe("DscService", () => {
  describe("Register function", () => {
    test("Create new account", async () => {
      const res: any = await dscAPI.register(newAccount);
      const { statusCode, message } = res;

      expect(statusCode).toEqual(HttpStatusCode.Created);
      expect(message).toContain("Success");
    });

    test("Create new account with invalid email", async () => {
      newAccount.email = "test.com";
      const res: any = await dscAPI.register(newAccount);
      const { message, statusCode } = res;

      expect(statusCode).toEqual(HttpStatusCode.BadRequest);
      expect(message).toEqual("email must be an email");
    });
  });

  describe("Login function", () => {
    test("Login local account", async () => {
      const res: any = await dscAPI.login(appToken);

      const { data, statusCode } = res;

      expect(statusCode).toEqual(HttpStatusCode.Ok);
      expect(data.at).toBeTruthy();
      expect(data.rt).toBeTruthy();
    });

    test("Login invalid local account", async () => {
      const res: any = await dscAPI.login(invalidAppToken);

      const { statusCode } = res;

      expect(statusCode).toEqual(HttpStatusCode.Unauthorized);
    });
  });

  describe("Google login function", () => {
    test("Login with Google token", async () => {
      const res: any = await dscAPI.googleLogin(googleToken);
      const { data, statusCode } = res;

      expect(statusCode).toEqual(HttpStatusCode.Ok);
      expect(data.at).toBeTruthy();
      expect(data.rt).toBeTruthy();
    });

    test("Login with invalid Google token", async () => {
      const res: any = await dscAPI.googleLogin(invalidGoogleToken);

      const { statusCode, message } = res;

      expect(statusCode).toEqual(HttpStatusCode.Unauthorized);
      expect(message).toContain("token invalid!");
    });
  });

  describe("Kakao login function", () => {
    test("Login with Kakao token", async () => {
      const res: any = await dscAPI.kakaoLogin(kakaoLogin);
      const { data, statusCode } = res;

      expect(statusCode).toEqual(HttpStatusCode.Ok);
      expect(data.at).toBeTruthy();
      expect(data.rt).toBeTruthy();
    });

    test("Login with invalid Kako token", async () => {
      const res: any = await dscAPI.kakaoLogin(invalidKakaoLogin);

      const { statusCode, message } = res;

      expect(statusCode).toEqual(HttpStatusCode.Unauthorized);
      expect(message).toContain("token invalid!");
    });
  });

  describe("User profile function", () => {
    test("Get logged user profile", async () => {
      const res: any = await dscAPI.getProfile();
      const { data, statusCode, message } = res;

      expect(statusCode).toEqual(HttpStatusCode.Ok);
      expect(message).toContain("Success");
      expect(data._id).toBeTruthy();
      expect(data.displayName).toBeTruthy();
    });

    test("Update logged user profile", async () => {
      const updateDto: IUpdateProfile = {
        displayName: "Dsc auth",
      };

      const res: any = await dscAPI.updateProfile(updateDto);

      const { statusCode, message, data } = res;

      expect(statusCode).toEqual(HttpStatusCode.Ok);
      expect(message).toContain("Success");
      expect(data.displayName).toContain(updateDto.displayName);
    });
  });

  describe("Refresh token function", () => {
    test("Refresh token with valid token", async () => {
      const res: any = await dscAPI.refreshToken();
      const { data, statusCode, message } = res;

      expect(statusCode).toEqual(HttpStatusCode.Ok);
      expect(message).toContain("Success");
      expect(data.at).toBeTruthy();
      expect(data.rt).toBeTruthy();
    });
  });
});
