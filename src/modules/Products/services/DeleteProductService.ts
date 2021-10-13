import { getCustomRepository } from "typeorm";

import Product from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";

export class DeleteProductService{
    public async execute(id: number): Promise<Product> {
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findById(id);

        if(!product) {
            throw new Error('Produto não encontrado.')
        }

        await productsRepository.remove(product)

        return product
    }
}