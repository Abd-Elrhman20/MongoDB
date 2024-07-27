import { ObjectId } from "mongodb"
import userCollection from "../../database/models/userModel.js"

export const ownerMiddleware = async (req, res, next) => {
    await userCollection.findOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            if (result._id == req.body.CurrentUserId) {
                next()
            }
            else {
                res.json({ message: "Error", data: "you cant' modify or delete that user" })
            }
        })
}