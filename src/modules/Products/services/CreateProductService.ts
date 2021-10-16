import { getCustomRepository } from "typeorm";

import Product from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";

interface IProps {
    name: string,
    amount: string,
    price: string
}

export class CreateProductService {
    public async execute({ name, amount, price}:IProps): Promise <Product>{
        const producstRepository = getCustomRepository(ProductsRepository);
       
        const product = producstRepository.create({
            name,
            amount, 
            price   
        })

        await producstRepository.save(product)

        return product;
    }
}