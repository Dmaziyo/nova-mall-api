import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pms_product_category' })
export default class ProductCategory {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    type: 'bigint',
    nullable: true,
    comment: '上级分类的编号：0表示一级分类',
  })
  parent_id: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true, comment: '分类级别：0->1级；1->2级' })
  level: number;

  @Column({ type: 'int', nullable: true })
  product_count: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  product_unit: string;

  @Column({
    type: 'int',
    nullable: true,
    comment: '是否显示在导航栏：0->不显示；1->显示',
  })
  nav_status: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: '显示状态：0->不显示；1->显示',
  })
  show_status: number;

  @Column({ type: 'int', nullable: true })
  sort: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '图标',
  })
  icon: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  keywords: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: '描述',
  })
  description: string;
}
