import fs from "fs";
import { specificationRoutes } from "../routes/specification.routes";

export const deleteFile = async(filename: string) => {

    try {
        await fs.promises.stat(filename);
    } catch {
        return;
    }

    await fs.promises.unlink(filename);
};