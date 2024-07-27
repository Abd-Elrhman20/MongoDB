import { ObjectId } from 'mongodb'
import carCollection from '../../database/models/carModel.js'

const getAllCars = async (req, res) => {
    await carCollection.find().toArray()
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const addCar = async (req, res) => {
    await carCollection.insertOne(req.body)
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const getSpecificCar = async (req, res) => {
    await carCollection.findOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const editCar = async (req, res) => {
    await carCollection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const deleteCar = async (req, res) => {
    await carCollection.deleteOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

export { getAllCars, addCar, getSpecificCar, editCar, deleteCar }

// ////////////////////////////// Special 
// Get all cars whose model is ‘Honda’ and ‘Toyota’ 
const getAllCarsWithModelsHyundaiAndChevrolet = async (req, res) => {
    await carCollection.find(
        { model: { $in: ["Hyundai", "Chevrolet"] } }
    ).toArray()
        .then(response => {
            res.json({ message: "Success", data: response })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

// Get Available Cars of a Specific Model.
const getAvailableCarsOfSpecificModel = async (req, res) => {
    await carCollection.find({ rentalStatus: "available", model: req.params.model }).toArray()
        .then(response => {
            res.json({ message: "Success", data: response })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

// - Get Cars that are Either rented {{or}} of a Specific Model.
const getAvailableCarsOfSpecificModelOrRentedCarsOfSpecificModel = async (req, res) => {
    await carCollection.find({
        $or: [
            { rentalStatus: "available", model: req.params.model },
            { rentalStatus: "rented", model: req.params.model }
        ]
    }).toArray()
        .then(response => {
            res.json({ message: "Success", data: response })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

export { getAllCarsWithModelsHyundaiAndChevrolet, getAvailableCarsOfSpecificModel, getAvailableCarsOfSpecificModelOrRentedCarsOfSpecificModel }