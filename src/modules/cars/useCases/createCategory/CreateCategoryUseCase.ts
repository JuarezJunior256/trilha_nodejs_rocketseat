import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    // criando uma instancia de Categoria Repositorio
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({description, name}: IRequest): void {
        
        // chamando metodo para verificar uma categoria existente
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
         throw new Error("Category already exists");
        }

        // chamando metodo para inserir
        this.categoriesRepository.create({description, name});
    }
}

export {CreateCategoryUseCase}