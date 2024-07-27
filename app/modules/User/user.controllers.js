import { ObjectId } from "mongodb"
import userCollection from "../../database/models/userModel.js"
import bcrypt from "bcrypt"

const getAllUsers = async (req, res) => {
    await userCollection.find().toArray()
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const getSpecificUser = async (req, res) => {
    await userCollection.findOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const editUser = async (req, res) => {
    await userCollection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const deleteUser = async (req, res) => {
    await userCollection.deleteOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.json({ message: "Success", data: result, status: "200" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

const login = async (req, res) => {
    await userCollection.findOne({ email: req.body.email })
        .then(result => {
            if (bcrypt.compareSync(req.body.password, result.password)) {
                res.json({ message: "Success", data: result, status: "200" })
            }
            else {
                res.json({ message: "Error", data: "Password is incorrect", status: "500" })
            }
        })
        .catch(err => {
            res.json({ message: "Error", data: "User not found", status: "500" })
        })
}

const register = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 5)
    req.body.password = hashedPassword

    await userCollection.insertOne(req.body)
        .then(result => {
            res.json({ message: "Success", data: result, status: "201" })
        })
        .catch(err => {
            res.json({ message: "Error", data: err, status: "500" })
        })
}

export { getAllUsers, getSpecificUser, editUser, deleteUser, login, register }