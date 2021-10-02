import { Router } from "express";
import { ProductsController } from "../controllers/ProductsController";

const routes = Router();

const productsController = new ProductsController();

routes.get('/', productsController.index);
routes.post('/', productsController.create);
routes.put('/', productsController.update);
routes.get('/:name', productsController.show);
routes.delete('/:name', productsController.delete);

export default routes