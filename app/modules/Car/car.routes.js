import { Router } from "express";
import { addCar, deleteCar, editCar, getAllCars, getAllCarsWithModelsHyundaiAndChevrolet, getAvailableCarsOfSpecificModel, getAvailableCarsOfSpecificModelOrRentedCarsOfSpecificModel, getSpecificCar } from "./car.controllers.js";

const carRouter = Router()

carRouter.get('/', getAllCars).post('/', addCar)
    .get('/:id', getSpecificCar).put('/:id', editCar).delete('/:id', deleteCar)

carRouter.get('/special/HyundaiAndChevrolet',getAllCarsWithModelsHyundaiAndChevrolet)
carRouter.get('/special/available/:model', getAvailableCarsOfSpecificModel)
carRouter.get('/special/availableOrRented/:model', getAvailableCarsOfSpecificModelOrRentedCarsOfSpecificModel)

export default carRouter