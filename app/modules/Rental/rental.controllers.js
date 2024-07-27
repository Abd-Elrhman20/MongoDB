import { ObjectId } from "mongodb"
import rentalCollection from "../../database/models/rentalModel.js"

const getAllRentals = async (req, res) => {
    await rentalCollection.find().toArray()
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const addRental = async (req, res) => {
    await rentalCollection.insertOne(req.body)
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const getSpecificRental = async (req, res) => {
    await rentalCollection.findOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const editRental = async (req, res) => {
    await rentalCollection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const deleteRental = async (req, res) => {
    await rentalCollection.deleteOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

export { getAllRentals, addRental, getSpecificRental, editRental, deleteRental }