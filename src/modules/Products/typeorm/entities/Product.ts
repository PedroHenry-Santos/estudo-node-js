import { IProduct } from "@modules/Products/models/Product";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('products')
class Product implements IProduct {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    amount: number

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}