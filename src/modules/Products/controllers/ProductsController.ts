import { Request, Response } from "express";
import { 
    CreateProductService,
    DeleteProductService,
    ListProductsService,
    ShowProductService,
    UpdatedProductService
 } from "../services"

interface Data{
    name: string,
    price: number,
    amount: number,
    id_product: number
}

export class ProductsController {
    public async index(request: Request, response: Response){
        const listProductsService = new ListProductsService()

        const product = await listProductsService.execute()

        response.json(product)
    }

    public async create(request: Request, response: Response){

        const {
            name,
            amount,
            price
        } = request.body

        const createProductService = new CreateProductService()

        const product = await createProductService.execute({
            name,
            amount,
            price
        })

        response.json(product)
    }

    public async update(request: Request, response: Response) {
        const {
            name, 
            amount,
            price,
        } = request.body
        const { id } = request.params

        const updateProductService = new UpdatedProductService()

        const product = await updateProductService.execute(
            +id,
            {
                name,
                amount,
                price
            }
        )

        response.json(product)
    }

    public async show(request: Request, response: Response) {
        const { id } = request.params

        const showProductService = new ShowProductService()

        const product = await showProductService.execute(+id)

        response.json(product)
    }

    public async delete(request: Request, response: Response){
        const { id } = request.params

        const deleteProductService = new DeleteProductService()

        const product = await deleteProductService.execute(+id)

        response.json(product)
    }
}