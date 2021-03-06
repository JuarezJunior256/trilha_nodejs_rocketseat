import { getRepository, Repository } from "typeorm";

import {
    ICreateSpecificationDTO,
    ISpeceficationRepository,
} from "../../../repositories/ISpecificationRepository";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpeceficationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification | undefined> {
        const specification = await this.repository.findOne(name);
        return specification;
    }
}

export { SpecificationRepository };
