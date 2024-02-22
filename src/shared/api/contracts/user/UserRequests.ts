import { ResponseBaseEntity } from "@/shared/api/schemas";
import { UserBaseEntity } from "@/shared/api/contracts";

// Регистрация
export type TPostSignUpRequest = {
  login: string;
  password: string;
  email: string;
};
export type TPostSignUpResponse = ResponseBaseEntity & {
  data: UserBaseEntity & {
    accessToken: string;
  };
};

// Авторизация
export type TPostSignInRequest = {
  login: string;
  password: string;
};
export type TPostSignInResponse = ResponseBaseEntity & {
  data: UserBaseEntity & {
    accessToken: string;
  };
};
