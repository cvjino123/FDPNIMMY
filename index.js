//1.Importing
const express = require("express");

const empModel = require('./model/model')

//2.Initializing
const app = new express();

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//3.API creation
//app.get(url,call back)
app.get('/',(req,res)=>{
    res.send("hi")
})
//create new port
app.get('/about',(req,res)=>{
res.send("About")
})
app.post('/login',(req,res)=>{
    console.log(req.body)

    res.send("data added")
})

app.post('/new',(req,res)=>{
    console.log(req.body)
new empModel(req.body).save();
res.send("data added to db");
})
//view 

app.get('/view',async(req,res)=>{
   var data = await empModel.find();
    res.send(data)
})

//delete
//to get id we pa  parameter
    app.delete('/remove/:id',async(req,res)=>{
    let id = req.params.id
    await empModel.findByIdAndDelete(id)
    res.send("data deleted")
})

//update(put)
app.put('/edit/:id',async(req,res)=>{
let id = req.params.id;
await empModel.findByIdAndUpdate(id,req.body)
res.send("data updated")
})

//4.Assign Port
app.listen(3005,(req,response)=>{
    console.log("Port is running in 3005")
})