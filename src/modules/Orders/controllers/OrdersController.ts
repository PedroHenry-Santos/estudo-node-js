import { Request, Response} from 'express';
import { 
    CreateOrderService,
    DeleteOrderService,
    ListOrderService,
    ShowOrderService,
    UpdatedOrderService
 } from '../services';

 interface Data {
    id_user: number;
    products: number; 
    total_price: number;
    payment_method: string;
}

export class OrdersControllers {
    public async index(request: Request, response: Response){
        const listOrderService = new ListOrderService()

        const order = await listOrderService.execute()

        response.json(order)
    }

    public async create(request: Request, response: Response) {
        
        const {
            id_user,
            products,
            total_price,
            payment_method
        } = request.body

        const createOrderService = new CreateOrderService()

        const order = await createOrderService.execute({
            id_user,
            products,
            total_price,
            payment_method
        })

        response.json(order)
    }

    public async update(request: Request, response: Response) {
        const {
            id_user,
            products,
            total_price,
            payment_method
        } = request.body
        const { id } = request.params

        const updatedOrderService = new UpdatedOrderService()

        const order = await updatedOrderService.execute(
            +id,
            {
                id_user,
                products,
                total_price,
                payment_method
            }
        )

        response.json(order)
    }

    public async show(request: Request, response: Response) {
        const { id } = request.params

        const showOrderService = new ShowOrderService()
        
        const order = await showOrderService.execute(+id)

        response.json(order)
    }

    public async delete(request: Request, response: Response) {
        const { id } = request.params

        const deleteOrderService = new DeleteOrderService()

        const order = await deleteOrderService.execute(+id)

        response.json(order)
    }
}