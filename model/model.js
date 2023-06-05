const mongoose = require('mongoose');//import

//connection
mongoose.connect("mongodb+srv://nimmyjose:nimmyjose@cluster0.htyxuye.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("db connected");
})
.catch(err=>console.log(err));
//schema creation using mongose.schema
let Scheme = mongoose.Schema;

const employeeSchema = new Scheme({
    sname:String,
    age:Number,
    pos:String,
    sal:Number
});
//schema and collection pass into database
//collecton name:employees and schema name:employeeA
var employeeModel = mongoose.model("employees",employeeSchema)
//export it
module.exports = employeeModel;