import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRespository {

    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({description, name}: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name, description, created_ad: new Date()
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
}

export { CategoriesRespository };