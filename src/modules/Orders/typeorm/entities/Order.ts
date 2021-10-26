import User from "../../../Users/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('orders')
class Order {
    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: 'id_user' })
    id_user: User

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