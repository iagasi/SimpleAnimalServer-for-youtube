const express = require("express");
const animalRouter = express.Router()
const AnimalController = require("../controllers/animalController")



///GET ALL
animalRouter.get("/", (req, res) => {
    res.status(200).send(AnimalController.getAll())
})

///GET BY NAME 
animalRouter.get("/:name", (req, res) => {
    const { name } = req.params
    const animal = AnimalController.getByName(name.toLowerCase())
    res.status(200).send(animal)
})

///GET ANIMAL BY ID
animalRouter.get("/id/:id", (req, res) => {
    const { id } = req.params
    const animal = AnimalController.getById(id)
    res.status(200).send(animal)
})

///CREATE ANIMAL
animalRouter.post("/", (req, res) => {
    const created = AnimalController.createAnimal(req)
    res.status(200).send(created)


})
///DELETE ANIMAL
animalRouter.delete("/:id", (req, res) => {
    const {id }= req.params
    const deletedCandidate = AnimalController.deleteAnimal(id)
    res.status(200).send(deletedCandidate)
})
module.exports = animalRouter