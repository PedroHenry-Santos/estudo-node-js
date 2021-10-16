import { EntityRepository, Repository } from "typeorm";

import Product from '../entities/Product';

interface Iprops {
   name: string
   amount: string
   price: string
}

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
    public async findById (id: number){
        const product = await this.findOne({
            where: {
                id
            }
        });

        return product;
    }

    public async findByName (name: string){
        const product = await this.findOne({
            where: {
                name
            }
        });

        return product;
    }


    public async findByAmountAndPrice ({name}: Iprops){

        const productName = await this.findByName(name)

        if (productName) return true

        return false;
    }
}