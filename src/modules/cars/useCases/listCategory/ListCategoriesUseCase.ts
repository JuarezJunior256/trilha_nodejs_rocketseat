
import { Category } from "../../entities/Category";
import { CategoriesRespository } from "../../repositories/CategoryRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: CategoriesRespository) {}
     
    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();
        return categories;
    }
}

export {ListCategoriesUseCase} 