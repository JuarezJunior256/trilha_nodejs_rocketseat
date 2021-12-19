import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "./Category";

@Entity("cars")
class Car {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string | undefined;

    @Column()
    description: string | undefined;

    @Column()
    daily_rate: number | undefined;

    @Column()
    available: boolean | undefined;

    @Column()
    license_plate: string | undefined;

    @Column()
    fine_amount: number | undefined;

    @Column()
    brand: string | undefined;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category | undefined;

    @Column()
    category_id: string | undefined;

    @CreateDateColumn()
    created_at: Date | undefined;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.available = true;
        }
    }
}

export { Car };
