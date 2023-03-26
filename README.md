# my_midway_project

## QuickStart

see [midway docs](https://midwayjs.org) for more detail.

## Trouble
1. You must provide selection conditions in order to find a single row.
typeorm4.x 版本中，查询参数需指定为 ` findOne({where: {xx:yy}}) instead of findOne({xx:yy})`


## TODO
- typeorm 中设置 `synchronize: true` 的影响
- post 查询默认走 `application/json` 格式？
- prettier 为什么没生效
