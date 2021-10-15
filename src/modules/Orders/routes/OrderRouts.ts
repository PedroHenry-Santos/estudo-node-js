import { Router } from "express";
import { OrdersControllers } from "../controllers/OrdersController";

const routes = Router();

const ordersController = new OrdersControllers();

routes.get('/', ordersController.index);
routes.post('/', ordersController.create);
routes.put('/:id', ordersController.update);
routes.get('/:id', ordersController.show);
routes. delete('/:id', ordersController.delete)

export default routes