import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pms_product' })
export default class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', nullable: true })
  brand_id: number;

  @Column({ type: 'bigint', nullable: true })
  product_category_id: number;

  @Column({ type: 'bigint', nullable: true })
  feight_template_id: number;

  @Column({ type: 'bigint', nullable: true })
  product_attribute_category_id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pic: string;

  @Column({ type: 'varchar', length: 64, nullable: false, comment: '货号' })
  product_sn: string;

  @Column({
    type: 'int',
    nullable: true,
    comment: '删除状态：0->未删除；1->已删除',
  })
  delete_status: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: '上架状态：0->下架；1->上架',
  })
  publish_status: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: '新品状态:0->不是新品；1->新品',
  })
  new_status: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: '推荐状态；0->不推荐；1->推荐',
  })
  recommand_status: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: '审核状态：0->未审核；1->审核通过',
  })
  verify_status: number;

  @Column({ type: 'int', nullable: true, comment: '排序' })
  sort: number;

  @Column({ type: 'int', nullable: true, comment: '销量' })
  sale: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    comment: '促销价格',
  })
  promotion_price: number;

  @Column({ type: 'int', default: 0, comment: '赠送的成长值' })
  gift_growth: number;

  @Column({ type: 'int', default: 0, comment: '赠送的积分' })
  gift_point: number;

  @Column({ type: 'int', nullable: true, comment: '限制使用的积分数' })
  use_point_limit: number;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '副标题' })
  sub_title: string;

  @Column({ type: 'text', nullable: true, comment: '商品描述' })
  description: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    comment: '市场价',
  })
  original_price: number;

  @Column({ type: 'int', nullable: true, comment: '库存' })
  stock: number;

  @Column({ type: 'int', nullable: true, comment: '库存预警值' })
  low_stock: number;

  @Column({ type: 'varchar', length: 16, nullable: true, comment: '单位' })
  unit: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    comment: '商品重量，默认为克',
  })
  weight: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: '是否为预告商品：0->不是；1->是',
  })
  preview_status: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
    comment: '以逗号分割的产品服务：1->无忧退货；2->快速退款；3->免费包邮',
  })
  service_ids: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  keywords: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  note: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '画册图片，连产品图片限制为5张，以逗号分割',
  })
  album_pics: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  detail_title: string;

  @Column({ type: 'text', nullable: true })
  detail_desc: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: '产品详情网页内容',
  })
  detail_html: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: '移动端网页详情',
  })
  detail_mobile_html: string;

  @Column({
    type: 'datetime',
    nullable: true,
    comment: '促销开始时间',
  })
  promotion_start_time: Date;

  @Column({
    type: 'datetime',
    nullable: true,
    comment: '促销结束时间',
  })
  promotion_end_time: Date;

  @Column({
    type: 'int',
    nullable: true,
    comment: '活动限购数量',
  })
  promotion_per_limit: number;

  @Column({
    type: 'int',
    nullable: true,
    comment:
      '促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购',
  })
  promotion_type: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '品牌名称',
  })
  brand_name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '商品分类名称',
  })
  product_category_name: string;
}
