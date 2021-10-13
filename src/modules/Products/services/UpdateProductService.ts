import { getCustomRepository } from "typeorm";

import Product from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";

interface IProps {
    name: string,
    amount: string,
    price: string
}

export class UpdatedProductService {
    public async execute(id:number, { name, amount, price}:IProps): Promise<Product> {
        const producstRepository = getCustomRepository(ProductsRepository);
        const product = await producstRepository.findById(id);

        if (!product) {
            throw new Error('Produto Icoreto.')
        }

        product.name = name
        product.amount = amount
        product.price = price

        await producstRepository.update(id, product)

        return product
    }
}

export default UpdatedProductService;