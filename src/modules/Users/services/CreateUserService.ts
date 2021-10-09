import { getCustomRepository } from 'typeorm';

import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IProps {
  name: string
  document: string
  email: string
  password: string
}

export class CreateUserService {
  public async execute({ name, email, document, password }:IProps): Promise<User> {
    const usersRepository =  getCustomRepository(UsersRepository);

    const verify = await usersRepository.findByEmailAndDocument({email,document})

    if (verify) throw new Error('O document or email exists');

    const user = usersRepository.create({
      name,
      email,
      document,
      password
    })

    await usersRepository.save(user)

    return user;
  }
}

