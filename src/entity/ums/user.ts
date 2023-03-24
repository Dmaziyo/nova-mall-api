import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'username',
    unique: true,
    type: 'varchar',
    length: 13,
    comment: '用户名',
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 40,
    comment: '用户密码',
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '头像',
  })
  icon: string;

  @Column({
    name: 'nick_name',
    type: 'varchar',
    nullable: true,
    comment: '昵称',
  })
  nickname: string;

  @Column({
    nullable: true,
    comment: '备注信息',
  })
  note: string;

  @Column({
    type: 'datetime',
    comment: '创建时间',
  })
  createTime: string;

  @Column({
    type: 'datetime',
    comment: '最后登录时间',
  })
  loginTime: string;

  @Column({
    type: 'int',
    default: 1,
    comment: '账号启用状态： 0: 禁用 ； 1: 启用',
  })
  status: number;
}
