import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface Ipayload {
    sub: string;
}
// middleware de autenticação 
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // requisação do token 
    const authHeader = request.headers.authorization;
    // se não tiver token lança um erro 
    if (!authHeader) {
        throw new AppError("Token missing");
    }

    // separando o token que vem da requisição 
    const [, token] = authHeader.split(" ");

    try {
        // verificando se realmente o token que vem da requisição é válido 
        // e inserindo na variável user_id
        const { sub: user_id } = verify(token, "3511a5007530480161bb058abfccab47") as Ipayload;
        
        // comparando o user_id do token com o do usuário 
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError("Usuário não existe");
        }

        next();
    } catch (error) {
        // se o token for inválido lança um erro
        throw new AppError("Token invalido");
    }

}