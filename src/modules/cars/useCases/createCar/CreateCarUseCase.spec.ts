import { CarRepositoryInMemory } from "../../repositories/in-memory/CarRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        await createCarUseCase.execute({
            name: "Gol",
            description: "Carro novo",
            daily_rate: 100,
            license_plate: "ABC-1245",
            fine_amount: 60,
            brand: "Volks",
            category_id: "category",
        });
    });
});
