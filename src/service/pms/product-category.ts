import { Inject, Provide } from '@midwayjs/core';
import { Utils } from '../../common/utils';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { BaseService } from '../base.service';
import { Repository } from 'typeorm';
import ProductCategory from '../../entity/pms/product-category';

@Provide()
export class CategoryService extends BaseService {
  @Inject()
  utils: Utils;

  @InjectEntityModel(ProductCategory)
  productCategoryRepository: Repository<ProductCategory>;

  async findAllCategory(): Promise<{ id: number; name: string }[]> {
    const categories = await this.productCategoryRepository.find({
      select: ['id', 'name'],
    });

    return categories.map(category => ({
      id: category.id,
      name: category.name,
    }));
  }
}
