import {container} from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implematations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implematations/SpcificationRepository";
import { ISpeceficationRepository } from "../../modules/cars/repositories/ISpecificationRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
);

container.registerSingleton<ISpeceficationRepository>(
    "SpecificationRepository", SpecificationRepository
);