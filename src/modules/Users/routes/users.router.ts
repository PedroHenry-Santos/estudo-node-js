import { Router} from 'express';
import { UsersControllers } from '../controllers/UsersControllers';
import { body, param} from 'express-validator'

import { validation } from '@shared/middlewares/validationField';

const routes = Router();

const usersControllers = new UsersControllers();


routes.get('/',usersControllers.index);
routes.post('/',
body('name', 'É requerido').isString(),
  body('document', 'É requerido').isString(),
  body('email', 'É requerido').isString().isEmail(),
  body('password', 'É requerido').isString(),
  validation
, usersControllers.create);
routes.put('/:id', 
param('id', 'É requerido').isNumeric(),
  body('name', 'É requerido').isString().optional(),
  body('document', 'É requerido').isString().optional(),
  body('email', 'É requerido').isString().isEmail().optional(),
  body('password', 'É requerido').isString().optional(),
  validation
,usersControllers.update);
routes.get('/:id',param('id', 'É requerido').isNumeric(),validation, usersControllers.show);
routes.delete('/:id',param('id', 'É requerido').isNumeric(),validation, usersControllers.delete)



export default routes