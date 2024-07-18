import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"
import 'dotenv/config'

const app = express()
app.use(express.json())

/*app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ['Content-Type']
    })
)*/
app.use(cors())

// home route 
app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome to server")
})

app.use("/books", booksRoute)

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        const PORT = process.env.PORT || 3000
        console.log('App is conected to db')
        app.listen(PORT, () => {
            console.log(`App is running on port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })