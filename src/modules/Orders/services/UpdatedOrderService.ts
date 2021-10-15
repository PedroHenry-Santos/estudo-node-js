import { getCustomRepository } from "typeorm";

import Order from "../typeorm/entities/Order";
import { OrdersRepository } from "../typeorm/repositories/OrdersRepository";

interface IProps{
    id_user: number;
    products: number; 
    total_price: number;
    payment_method: string;
}

export class UpdatedOrderService { 

    public async execute(id: number, { id_user, products, total_price, payment_method }:IProps): Promise<Order>{
        const ordersRepository = getCustomRepository(OrdersRepository);
        const order = await ordersRepository.findById(id)
        const verify = await ordersRepository.findById(id_user)

        if (!order) {
            throw new Error('Order incorreta.')
        }

        if (verify && (order.id_user !== id_user))
            throw new Error('Order já existe.')

        order.id_user = id_user
        order.products = products
        order.total_price = total_price
        order.payment_method = payment_method

        await ordersRepository.update(id, order)

        return order;
    }
}

export default UpdatedOrderService;