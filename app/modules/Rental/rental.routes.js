import { Router } from "express";
import { addRental, deleteRental, editRental, getAllRentals, getSpecificRental } from "./rental.controllers.js";

const rentalRoute = Router()

rentalRoute.get('/', getAllRentals).post('/', addRental)
    .get('/:id', getSpecificRental).put('/:id', editRental).delete('/:id', deleteRental)

export default rentalRoute
