import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";

import {compare} from "bcrypt";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    email: string; password: string;
}

interface IResponse {
    user: {
        name: string; email: string;
    };
    token: string;
};

@injectable()
class AuthenticateUserUseCase {
    constructor( 
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {
        // validar usuario
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email ou senha incorretos");
        }

        // validar senha
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email ou senha incorretos");
        }

        // gerar token
        const token = sign({}, "3511a5007530480161bb058abfccab47", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export {AuthenticateUserUseCase};