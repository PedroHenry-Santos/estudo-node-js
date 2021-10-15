import { getCustomRepository } from 'typeorm';

import Order from '../typeorm/entities/Order';
import { OrdersRepository } from '../typeorm/repositories/OrdersRepository';

interface IProps {
    id_user: number;
    products: number; 
    total_price: number;
    payment_method: string;
}

export class CreateOrderService {
  public async execute({ id_user, products, total_price, payment_method }:IProps): Promise<Order> {
    const ordersRepository =  getCustomRepository(OrdersRepository);

    const verify = await ordersRepository.findById(id_user)

    if (verify) throw new Error('A ordem já foi emitida.');

    const orders = ordersRepository.create({
        id_user,
        products, 
        total_price, 
        payment_method
    })

    await ordersRepository.save(orders)

    return orders;
  }
}