interface CreateProduct {
    name: string
    price: number
    amount: number
    id_product: number
}

interface UpdateProduct{
    name: string
    price: number
    amount: number
    id_product: number
}

export class ServiceCreateProduct {
    private data: UpdateProduct[] = []
    private static instance: ServiceCreateProduct;

    constructor(){}

    public static getInstance(): ServiceCreateProduct{
        if (!ServiceCreateProduct.instance){
            ServiceCreateProduct.instance = new ServiceCreateProduct();
        }

        return ServiceCreateProduct.instance;
    }

    private create(data: CreateProduct) {
        this.data.push(data)
    }

    private findValue(nameFind: string){
        const index = this.data.findIndex(({name}) => name === nameFind)
        return index;
    }

    private updateValue(data: UpdateProduct){
        const index = this.findValue(data.name)
        this.data[index] = data
    }

    private deleteValue(name: string){
        const index = this.findValue(name)
        this.data.splice(index, 1)
    }

    public execute({name, price, amount, id_product}: CreateProduct){
        this.create({name, price, amount, id_product})

        return {name, price, amount, id_product}
    }

    public list() {
        return this.data
    }

    public update({name, price, amount, id_product}: UpdateProduct){
        this.updateValue({name, price, amount, id_product})

        return {name, price, amount, id_product}
    }

    public show(name: string){
        return this.findValue(name)
    }

    public delete(name: string){
        this.deleteValue(name)
        return{}
    }
}