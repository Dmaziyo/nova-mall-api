/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface ResOp {
  data?: any;
  code?: number;
  message?: string;
}

export interface ExecuteData {
  id: number;
  args?: string | null;
  service: string;
}

export interface Token {
  uid: number;
  pv: number;
}

declare module '@midwayjs/koa' {
  interface Context {
    admin: Token;
  }

  interface EggAppConfig {
    rootRoleId: number;
    jwt: {
      secret: string;
    };
  }
}
