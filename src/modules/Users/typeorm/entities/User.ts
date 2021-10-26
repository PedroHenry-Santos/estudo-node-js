
import Order from "../../../Orders/typeorm/entities/Order";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  document: string;

  @Column()
  password: string;

  @OneToMany(() => Order, orders => orders.id_user)
  @JoinColumn({name: 'orders'})
  orders: Order;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default User;