import { ADMIN_PREFIX_URL, BaseController } from '../base.controller';
import { Get, Post, Body, Controller } from '@midwayjs/decorator';
import { ResOp } from '../../interface';
import { res } from '../../common/utils';
import { CategoryService } from '../../service/pms/product-category';
import { Inject } from '@midwayjs/core';
import { isEmpty } from 'lodash';
import { ProductService } from '../../service/pms/product';

@Controller(`${ADMIN_PREFIX_URL}/product`)
export class ProductController extends BaseController {
  @Inject()
  categoryService: CategoryService;

  @Inject()
  productService: ProductService;

  @Get('/test')
  async home() {
    return 'Hello Midwayjs! product';
  }

  @Get('/category')
  async listCategory(): Promise<ResOp> {
    const categories = await this.categoryService.findAllCategory();

    return res({ data: categories });
  }

  @Post('/')
  async listByCategoryId(
    @Body('categoryId') categoryId?: number
  ): Promise<ResOp> {
    const products = await this.productService.findByCategoryId(categoryId);
    if (isEmpty(products)) {
      return res({ code: 20003 });
    }
    return res({ data: products });
  }
}
