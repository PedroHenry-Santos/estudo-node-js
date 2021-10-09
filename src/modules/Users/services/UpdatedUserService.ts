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
      throw new Error('O burro manda o usuário correto');
    }

    if (verify && (user.document !== document || user.email !== email))
      throw new Error('O document or email exists');

    user.name = name
    user.email = email
    user.document = document
    user.password = password

    await usersRepository.update(id, user)

    return user;
  }
}

export default UpdatedUserService;