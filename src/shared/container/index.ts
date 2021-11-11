import {container} from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implematations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implematations/SpcificationRepository";
import { ISpeceficationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
);

container.registerSingleton<ISpeceficationRepository>(
    "SpecificationRepository", SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository", UsersRepository
)