import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

    constructor( 
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    
    async execute({name, email, password, driver_license}: ICreateUserDTO) {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new Error("E-mail de usuario já existe");
        }
        const passwordHash = await hash(password, 8);
        await this.usersRepository.create({name, email, password: passwordHash, driver_license});
    }
}

export { CreateUserUseCase };