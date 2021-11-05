import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO, ISpeceficationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpeceficationRepository{
    private specifications: Specification[] | undefined;

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification,{
            name, description, created_at: new Date(),
        });

        this.specifications?.push(specification);
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications?.find(s => s.name === name);
        return specification;
    }
}

export {SpecificationRepository}