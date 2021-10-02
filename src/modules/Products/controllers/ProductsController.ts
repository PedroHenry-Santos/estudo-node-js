import { Request, Response } from "express";
import { ServiceCreateProduct } from "../services/ServiceCreateProduct"

interface Data{
    name: string,
    price: number,
    amount: number,
    id_product: number
}

export class ProductsController {
    public index(request: Request,  response: Response){
        const serviceCreateProduct = ServiceCreateProduct.getInstance()
        const result = serviceCreateProduct.list()

        response.json(result)
    }

    public create(request: Request, response: Response){
        const {name, price, amount, id_product} = request.body

        const serviceCreateProduct = ServiceCreateProduct.getInstance()
        const result = serviceCreateProduct.execute({name, price, amount, id_product})

        response.json({message: "Produto cadastrado.", data: result})
    }

    public update(request: Request, response: Response){
        const {name, price, amount, id_product} = request.body

        const serviceCreateProduct = ServiceCreateProduct.getInstance()
        const result = serviceCreateProduct.update(
            {name, price, amount, id_product}
        )
        
        response.json({message: "Produto atualizado", data: result})
    }

    public show(request: Request, response: Response){
        const {name} = request.params

        const serviceCreateProduct = ServiceCreateProduct.getInstance()
        const result = serviceCreateProduct.show(name)

        response.json({message: "Produto cadastrado."})
    }

    public delete(request: Request, response: Response){
        const {name} = request.params

        const serviceCreateProduct = ServiceCreateProduct.getInstance()
        const result = serviceCreateProduct.delete(name)

        response.json({message: "Produto deletado.", data:result})
    }
}