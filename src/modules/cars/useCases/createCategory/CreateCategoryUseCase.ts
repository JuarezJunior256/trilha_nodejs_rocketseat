import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateCategoryUseCase {
    // criando uma instancia de Categoria Repositorio
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) {}

    async execute({description, name}: IRequest): Promise<void> {
        
        // chamando metodo para verificar uma categoria existente
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
         throw new Error("Category already exists");
        }

        // chamando metodo para inserir
        this.categoriesRepository.create({description, name});
    }
}

export {CreateCategoryUseCase}