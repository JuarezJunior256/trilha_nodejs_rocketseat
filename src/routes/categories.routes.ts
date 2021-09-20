
import { Router } from "express";
import { CategoriesRespository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();  

categoriesRoutes.post("/", (req, res) => {
    const {name, description} = req.body;

    const categoryAlreadyExists = categoriesRespository.findByName(name);

    if (categoryAlreadyExists) {
    return res.status(400).json({msg: "Catgory exists"});
    }

    categoriesRespository.create({description, name});

    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRespository.list();

    return res.send(all);
});


export {categoriesRoutes};