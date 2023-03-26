import {Inject, Provide} from "@midwayjs/core";
import {Utils} from "../../common/utils";
import {InjectEntityModel} from "@midwayjs/typeorm";
import {BaseService} from "../base.service";
import {Repository} from "typeorm";
import SysUser from "../../entity/ums/user";
import { isEmpty } from 'lodash';

@Provide()
export class AdminVerifyService extends BaseService {
  @Inject()
  utils: Utils;

  @InjectEntityModel(SysUser)
  user: Repository<SysUser>;

  /**
   * 获取登录JWT
   * 返回null则账号密码有误，不存在该用户
   */
  async getLoginSign(username: string, password: string): Promise<string> {
    console.log("getLoginSign", username, password);
    const user = await this.user.findOne({
      where: {
        username: username,
        status: 1,
      }
    } as any);
    if (isEmpty(user)) {
      return null;
    }
    // const comparePassword = this.utils.md5(`${password}`);
    if (user!.password !== password) {
      return null;
    }
    const jwtSign = this.utils.jwtSign(
      {
        uid: parseInt(user!.id.toString()),
        pv: 1,
      },
      {
        expiresIn: '24h',
      }
    );
    // // 保存登录日志
    // await this.adminSysLoginLogService.save(user!.id);
    return jwtSign;
  }
}
