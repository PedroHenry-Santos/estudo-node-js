import {Router} from 'express';
import UserRoutes from '@modules/Users/routes/users.router'
import ProductRouts from '@modules/Products/routes/ProductRouts'

const routes = Router();

routes.use('/users', UserRoutes);
routes.use('/products', ProductRouts);
routes.use('/orders', () => console.log());

export default routes;