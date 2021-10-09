import { getCustomRepository } from 'typeorm';

import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

export class DeleteUserService {
  public async execute(id: number): Promise<User> {
    const usersRepository =  getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new Error('O burro manda o usuário correto');
    }

    await usersRepository.remove(user)

    return user;
  }
}
