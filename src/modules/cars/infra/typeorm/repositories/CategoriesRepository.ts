import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";

import { ICategoriesRepository, ICreateCategoryDTO} from "../../../repositories/ICategoriesRepository"

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    // criando metodo para inserir
    async create({description, name}: ICreateCategoryDTO): Promise<void> {
       
        const category = this.repository.create({
            description,
            name
        });

        await this.repository.save(category);
    }
    // metodo para listar
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories; 
    }

    // metodo para buscar um categoria existente
    async findByName(name: string): Promise<Category | undefined> {
        const category = await this.repository.findOne({name});
        return category;
    }
   
}

export { CategoriesRepository };