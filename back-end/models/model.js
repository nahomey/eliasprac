import mongoose from "mongoose";
const employeeSchema = mongoose.Schema(

    {
        firstName: String,
        lastName: String,
        email: String,
        age: Number
    }
);


const employeeModel = mongoose.model("employeeModel", employeeSchema);
export default employeeModel;

// const employeeModel = mongoose.model("employeeModel", employeeSchema);
// module.exports = employeeModel;