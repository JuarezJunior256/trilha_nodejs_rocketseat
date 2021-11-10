import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const specificationRoutes = Router();

const createSpecificationController = new CreateCategoryController();

specificationRoutes.post("/", createSpecificationController.handle)

export {specificationRoutes}