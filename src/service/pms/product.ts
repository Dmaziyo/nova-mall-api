import { Inject, Provide } from '@midwayjs/core';
import { Utils } from '../../common/utils';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { BaseService } from '../base.service';
import { Repository } from 'typeorm';
import Product from '../../entity/pms/product';

@Provide()
export class ProductService extends BaseService {
  @Inject()
  utils: Utils;

  @InjectEntityModel(Product)
  productRepository: Repository<Product>;

  async findByCategoryId(categoryId: number): Promise<Product[] | undefined> {
    const products = await this.productRepository.find({
      where: { product_category_id: categoryId },
    });

    return products;
  }
}
