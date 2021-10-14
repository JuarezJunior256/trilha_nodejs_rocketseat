import { ISpeceficationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string, 
    description: string
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpeceficationRepository) {}
   
    execute({name, description}: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error("Error");
        }

        this.specificationsRepository.create({
            name, description
        });
    }
}

export {CreateSpecificationUseCase}