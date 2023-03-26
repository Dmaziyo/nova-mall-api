import { Expose } from 'class-transformer';
import {Rule, RuleType} from "@midwayjs/validate";

export class LoginInfoDto {
  @Rule(RuleType.string().required())
  @Expose()
  username: string;

  @Rule(RuleType.string().required())
  @Expose()
  password: string;
}
