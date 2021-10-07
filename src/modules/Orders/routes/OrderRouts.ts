import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

const routes = Router();

const ordersController = new OrderController();

routes.get('/', ordersController.index);
routes.post('/', ordersController.create);
routes.put('/', ordersController.update);
routes.get('/:name', ordersController.show);
routes. delete('/:name', ordersController.delete)

export default routes