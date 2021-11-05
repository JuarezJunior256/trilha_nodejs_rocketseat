import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpeceficationRepository {
    create({name, description}:ICreateSpecificationDTO): void;
    findByName(name: string): Specification | undefined;
}

export { ISpeceficationRepository, ICreateSpecificationDTO }