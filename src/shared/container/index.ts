import {container} from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/SpcificationRepository";
import { ISpeceficationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { UsersRepository} from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
);

container.registerSingleton<ISpeceficationRepository>(
    "SpecificationRepository", SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository", UsersRepository
)