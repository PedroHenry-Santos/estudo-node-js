import { EntityRepository, Repository } from 'typeorm';

import User from '../entities/User';

interface Iprops {
  document: string;
  email: string;
}

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findById (id: number){
    const user = await this.findOne({
      where: {
        id
      }
    });

    return user;
  }

  public async findByEmail (email: string){
    const user = await this.findOne({
      where: {
        email
      }
    });

    return user;
  }

  public async findByDocument (document: string){
    const user = await this.findOne({
      where: {
        document
      }
    });

    return user;
  }

  public async findByEmailAndDocument ({document, email}: Iprops){
    const userEmail = await this.findByEmail(email)

    if (userEmail) return true

    const userDocument = await this.findByDocument(document)

    if (userDocument) return true

    return false;
  }
}