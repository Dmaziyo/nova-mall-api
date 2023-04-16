import {
  ADMIN_PREFIX_URL,
  BaseController,
  // NOAUTH_PREFIX_URL,
} from '../base.controller';
import { Get, ALL, Post, Body, Controller } from '@midwayjs/decorator';
import { LoginInfoDto } from '../../dto/ums/login';
import { ResOp } from '../../interface';
import { res } from '../../common/utils';
import { AdminVerifyService } from '../../service/ums/login';
import { Inject } from '@midwayjs/core';
import { Validate } from '@midwayjs/validate';
import { isEmpty } from 'lodash';

@Controller(`${ADMIN_PREFIX_URL}/`, {
  tagName: 'AdminLogin',
  description: '后台登录控制器',
})
export class LoginController extends BaseController {
  @Inject()
  adminVerifyService: AdminVerifyService;

  @Get('/')
  async home() {
    return 'Hello Midwayjs! login';
  }

  @Post('/login')
  @Validate()
  async login(@Body(ALL) loginInfo: LoginInfoDto): Promise<ResOp> {
    // const isSuccess = await this.adminVerifyService.checkImgCaptcha(
    //   loginInfo.captchaId,
    //   loginInfo.verifyCode
    // );
    // if (!isSuccess) {
    //   return res({ code: 10002 });
    // }
    const sign = await this.adminVerifyService.getLoginSign(
      loginInfo.username,
      loginInfo.password
    );
    if (isEmpty(sign)) {
      return res({ code: 10003 });
    }
    return res({ data: { token: sign } });
  }
}
