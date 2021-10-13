import { getCustomRepository } from 'typeorm';

import Product from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

export class ShowProductService {
  public async execute(id: number): Promise<Product> {
    const productsRepository =  getCustomRepository(ProductsRepository);

    const products = await productsRepository.findById(id);

    if (!products) {
      throw new Error('O burro manda o usuário correto');
    }

    return products;
  }
}