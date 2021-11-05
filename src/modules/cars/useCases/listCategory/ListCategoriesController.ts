import {Request, Response} from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUseCase) {}
    async handle(req: Request, res: Response): Promise<Response> {
        const all = await this.listCategoryUseCase.execute();

        return res.send(all);
    }
}

export {ListCategoriesController}