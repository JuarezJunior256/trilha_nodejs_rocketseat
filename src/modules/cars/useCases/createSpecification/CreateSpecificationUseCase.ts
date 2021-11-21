import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISpeceficationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string, 
    description: string
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpeceficationRepository) {}
   
    async execute({name, description}: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists) {
            throw new AppError("Error");
        }

        await this.specificationsRepository.create({
            name, description
        });
    }
}

export {CreateSpecificationUseCase}