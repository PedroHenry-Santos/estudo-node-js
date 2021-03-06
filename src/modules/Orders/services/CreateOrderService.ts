import { UsersRepository } from '@modules/Users/typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

import Order from '../typeorm/entities/Order';
import { OrdersRepository } from '../typeorm/repositories/OrdersRepository';

interface IProps {
    id_user: number;
    products: number; 
    total_price: number;
    payment_method: string;
    user_document: string;
}

export class CreateOrderService {
  public async execute({ id_user, products, total_price, payment_method, user_document}:IProps): Promise<Order> {
    const ordersRepository =  getCustomRepository(OrdersRepository);
    const usersRepository =  getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(id_user);

    if (!user) throw new Error('O usuário nao existe.');

    const orders = ordersRepository.create({
        id_user: user,
        products, 
        total_price, 
        payment_method,
        user_document
    })

    await ordersRepository.save(orders)

    return orders;
  }
}