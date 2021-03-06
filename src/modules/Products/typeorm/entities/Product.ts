import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    amount: string

    @Column()
    price: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}
export default Product;