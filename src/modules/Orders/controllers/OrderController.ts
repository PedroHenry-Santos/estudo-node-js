import { Request, Response} from 'express';
import { ServiceCreateOrder } from '../services/OrderService';

interface Data{
    name: string,
    amount: number,
    order: number
}

export class OrderController {
    public index(request: Request, response: Response){
        const serviceCreateOrder = ServiceCreateOrder.getInstance();
        const result = serviceCreateOrder.list();

        response.json(result);
    }

    public create(request: Request, response: Response){
        const {name, amount, order} = request.body

        const serviceCreateOrder = ServiceCreateOrder.getInstance();
        const result = serviceCreateOrder.execute({name, amount, order})

        response.json({message: "Ordem cadastro.", data: result})
    }

    public update(request: Request, response: Response){
        const {name, order, amount} = request.body

        const serviceCreateOrder = ServiceCreateOrder.getInstance()
        const result = serviceCreateOrder.update(
            {name, order, amount}
        )

        response.json({message: "Produto atualizado", data: result})
    }

    public show(request: Request, response: Response){
        const {name} = request.params

        const serviceCreateOrder = ServiceCreateOrder.getInstance()
        const result = serviceCreateOrder.show(name)

        response.json({message: "Produto cadastrado."})
    }

    public delete(request: Request, response: Response){
        const {name} = request.params

        const serviceCreateOrder = ServiceCreateOrder.getInstance()
        const result = serviceCreateOrder.delete(name)

        response.json({message: "Produto deletado.", data: result})
    }
}
