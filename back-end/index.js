import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import model from './models/model.js';



mongoose.connect("mongodb + srv: //nahideveloper:Nahomay2022@customers.nysef.mongodb.net/customerdata?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });



// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established succesfully");
// })

const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("hello nahoma!");
// })

app.post("/elias", async(req, res) => {

    const firstName = req.body.firstname;
    const lasttName = req.body.lastname;
    const email = req.body.email;
    const age = req.body.age;

    const employeeData = new model({
        firstName,
        lasttName,
        email,
        age
    });
    try {
        await employeeData.save();
    } catch (error) {
        console.log(error);
    }



})





app.listen(6001, () => { console.log("server is running on port 6001!") });