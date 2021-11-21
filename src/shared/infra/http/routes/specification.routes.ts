import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";

const specificationRoutes = Router();

const createSpecificationController = new CreateCategoryController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle)

export {specificationRoutes}