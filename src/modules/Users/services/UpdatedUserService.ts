import AppError from '@shared/Error/AppError';
import { getCustomRepository } from 'typeorm';

import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IProps {
  name: string
  document: string
  email: string
  password: string
}

export class UpdatedUserService {
  public async execute(id: number, { name, email, document, password }:IProps): Promise<User> {
    const usersRepository =  getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(id);
    const verify = await usersRepository.findByEmailAndDocument({email,document})

    if (!user) {
      throw new AppError('Usuário inexistente');
    }

    if (verify && (user.document !== document || user.email !== email))
      throw new AppError('Email ou documento existe');

    user.name = name || user.name
    user.email = email || user.email
    user.document = document || user.document
    user.password = password || user.password

    await usersRepository.update(id, user)

    return user;
  }
}

export default UpdatedUserService;