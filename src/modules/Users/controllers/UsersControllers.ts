import { Request, Response } from "express";
import { 
  CreateUserService,
  DeleteUserService,
  ListUsersService,
  ShowUserService,
  UpdatedUserService 
} from "../services/index";

interface Data {
  name: string
  email: string
  age: number
  phone: string
}

export class UsersControllers {
  public async index(request: Request, response: Response) {
    const listUsersService = new ListUsersService()
    
    const user = await listUsersService.execute()
    
    response.json(user)
  }

  public async create(request: Request, response: Response) {

    const {
      name,
      email,
      document,
      password
    } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      document,
      password
    })

    response.json(user)
  }

  public async update(request: Request, response: Response) {
    const {
      name,
      email,
      document,
      password
    } = request.body
    const { id } = request.params

    const updatedUserService = new UpdatedUserService()

    const user = await updatedUserService.execute(
      +id, 
      {
        name,
        email,
        document,
        password
      }
    )

    response.json(user)
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params

    const showUserService = new ShowUserService()

    const user = await showUserService.execute(+id)

    response.json(user)
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params

    const deleteUserService = new DeleteUserService()

    const user = await deleteUserService.execute(+id)

    response.json(user)
  }
}