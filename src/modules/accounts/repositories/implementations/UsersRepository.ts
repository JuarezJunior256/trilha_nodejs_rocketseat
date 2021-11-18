import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({name, email, password ,driver_license }: ICreateUserDTO): Promise<void> {   
        const user = this.repository.create({
            name, email, driver_license, password
        })

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const emailUser = await this.repository.findOne({email});
        return emailUser;
    }

    async findById(id: string): Promise<User | undefined> {
        const user = await this.repository.findOne({id});
        return user;
    }

}

export { UsersRepository };