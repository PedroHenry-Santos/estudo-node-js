import {Router} from 'express';
import { UsersControllers } from '../controllers/UsersControllers';

const routes = Router();

const usersControllers = new UsersControllers();

routes.get('/', usersControllers.index);
routes.post('/', usersControllers.create);
routes.put('/:id', usersControllers.update);
routes.get('/:id', usersControllers.show);
routes.delete('/:id', usersControllers.delete)

export default routes