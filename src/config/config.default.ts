import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1679626589494_4969',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'jiechen-secret',
    expiresIn: '3d', // https://github.com/vercel/ms
  },
  cors: {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    allowHeaders: 'Content-Type,Authorization',
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '12345678',
        database: 'macro-mall',
        // 自动建表
        // synchronize: true,
        // 打印日志
        logging: true,
        // 字符集
        charset: 'utf8mb4',
        entities: '../entity/ums',
        // timezone: '+08:00',
      },
    },
  },
} as MidwayConfig;
