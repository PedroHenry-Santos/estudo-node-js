import { IUser } from "@modules/Users/models/User";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User implements IUser {
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

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default User;