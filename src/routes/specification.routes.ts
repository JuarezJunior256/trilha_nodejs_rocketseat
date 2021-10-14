import { response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpcificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
})

export {specificationRoutes}