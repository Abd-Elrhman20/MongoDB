import express from 'express'
import userRouter from './modules//User/user.routes.js'
import carRouter from './modules/Car/car.routes.js'
import rentalRoute from './modules/Rental/rental.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use('/users', userRouter)
app.use("/cars", carRouter)
app.use("/rentals", rentalRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))