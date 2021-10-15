import { EntityRepository, Repository } from "typeorm";

import Order from '../entities/Order';

interface  Iprops {
    id_user: number;
    products: number; 
    total_price: number;
    payment_method: string;
}

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
    public async  findById (id: number){
        const order = await this.findOne({
            where: {
                id
            }
        });

        return order;
    }

    public async findByIdUser (id_user: number){
        const order = await this.findOne({
            where: {
                id_user
            }
        });

        return order;
    }

    public async findByProducts (products: number){
        const order = await this.findOne({
            where: {
                products
            }
        })

        return order;
    }

    public async findByTotalPrice (total_price: number){
        const order = await this.findOne({
            where:{
                total_price
            }
        });

        return order;
    }

    public async findByPaymentMethod (payment_method: string){
        const order = await this.findOne({
            where:{
                payment_method
            }
        })

        return order;
    }

    public async findByNameAndAmount ({id_user, products, total_price, payment_method}: Iprops){
        const orderIdUser = await this.findByIdUser(id_user)
        if (orderIdUser) return true 

        const orderProducts = await this.findByProducts(products)
        if (orderProducts) return true

        const orderTotalPrice = await this.findByTotalPrice(total_price)
        if (orderTotalPrice) return true

        const orderPaymentMethod = await this.findByPaymentMethod(payment_method)
        if (orderPaymentMethod) return true
        
        return false;
    }
}