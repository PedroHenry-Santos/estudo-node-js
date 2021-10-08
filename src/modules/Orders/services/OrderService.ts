interface CreateOrder {
    name: string,
    order: number,
    amount: number,
}

interface UpdateOrder {
    name: string,
    order: number,
    amount: number,
}

export class ServiceCreateOrder{
    private data: UpdateOrder[] = []
    private static instance: ServiceCreateOrder;

    constructor(){}

    public static getInstance(): ServiceCreateOrder{
        if (!ServiceCreateOrder.instance){
            ServiceCreateOrder.instance = new ServiceCreateOrder();
        }

        return ServiceCreateOrder.instance;
    }

    private create(data: CreateOrder) {
        this.data.push(data)
    }

    private findValue(nameFind: string){
        const index = this.data.findIndex(({name}) => name === nameFind)
        return index;
    }

    private updateValue(data: UpdateOrder){
        const index = this.findValue(data.name)
        this.data[index] = data
    }

    private deleteValue(name: string){
        const index = this.findValue(name)
        this.data.splice(index, 1)
    }

    public execute({name, order, amount}: CreateOrder){
        this.create({name, order, amount})

        return {name, order, amount}
    }

    public list() {
        return this.data
    }

    public update({name, order, amount}: UpdateOrder){
        this.updateValue({name, order, amount})

        return {name, order, amount}
    }

    public show(name: string){
        return this.findValue(name)
    }

    public delete(name: string){
        this.deleteValue(name)
        return{}
    }
}