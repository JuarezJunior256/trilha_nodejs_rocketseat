import {Request, Response} from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import "reflect-metadata";
import {container} from "tsyringe";

class ListCategoriesController {

    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoriesUseCase);
        const all = await listCategoryUseCase.execute();

        return res.send(all);
    }
}

export {ListCategoriesController}