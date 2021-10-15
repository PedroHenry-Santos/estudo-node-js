import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('orders')
class Order {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_user: number

    @Column()
    user_document: string

    @Column()
    products: number

    @Column()
    total_price: number

    @Column()
    payment_method: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}
export default Order;