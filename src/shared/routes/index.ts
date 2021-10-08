import {Router} from 'express';
import UserRoutes from '@modules/Users/routes/users.router'
import ProductRouts from '@modules/Products/routes/ProductRouts'
import OrderRouts from '@modules/Orders/routes/OrderRouts'

const routes = Router();

routes.use('/users', UserRoutes);
routes.use('/products', ProductRouts);
routes.use('/orders', OrderRouts);

export default routes;