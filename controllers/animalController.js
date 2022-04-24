
let animals = require("../db/animalDb")
const uuid = require("uuid").v4()
class AnimaController {

    getAll() {
        return animals
    }

    getByName(name) {
        try {

            const candidate = animals.filter(animal => animal.name.toLowerCase() == name)
            const response = candidate.length ? candidate : `The Animal with this name << ${name} >> is not found`
            return response
        }
        catch (err) {
            return err
        }
    }
    getById(id) {
        const candidate = animals.filter(animal => animal.id == id)
        console.log(candidate);
        const response = candidate.length ? candidate : `The Animal with this ID << ${id} >> is not found`
        return response

    }
    createAnimal(req) {
        const { name, animal, color } = req.body
        if (!name || !animal || !color) {
            return "The properties <name>,<animal>,<color> IS REQUIRRED"
        }

        else {
            const saved = { id: uuid, name, animal, color }
            animals.push(saved)
            return { created: saved }
        }

    }
    deleteAnimal(id) {
        const candidate = animals.find(animal => animal.id == id)
        if (!candidate) { return "The animal with this ID is NOT FOUND" }


        else {
            let removeAnimal = animals.filter(animal => animal.id !== id)
            animals = removeAnimal
            return id + "Sucesfully  Deleted"
        }
    }
}


module.exports = new AnimaController