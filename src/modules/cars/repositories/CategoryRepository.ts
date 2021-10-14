import { Category } from "../model/Category";

import { ICategoriesRepository, ICreateCategoryDTO} from "./ICategoriesRepository"

class CategoriesRespository implements ICategoriesRepository {

    private categories: Category[];

    private static INSTANCE: CategoriesRespository;

    constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRespository {
        if (!CategoriesRespository.INSTANCE) {
            CategoriesRespository.INSTANCE = new CategoriesRespository();
        }

        return CategoriesRespository.INSTANCE;
    }

    // criando metodo para inserir
    create({description, name}: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name, description, created_ad: new Date()
        })

        this.categories.push(category);
    }
    // metodo para listar
    list(): Category[] {
        return this.categories;
    }

    // metodo para buscar um categoria existente
    findByName(name: string): Category | undefined {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
   
}

export { CategoriesRespository };