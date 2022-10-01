const express = require("express")
const bodyparser = require("body-parser")
const app = express()
app.use(bodyparser())
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hellow World")
})


 
function checkValidate(num1, num2) {
    if (num1 == "" || num2 == "") {
        return false;

    } else {
        return true;
    }
}

function dataTypes(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    } else {
        return true;
    }
}


// Add part
app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValidate(num1, num2)){
        return res.status(404).json({
            status: "failure",
            message: "invalid inputs",
        })
    }
    if(!dataTypes(num1,num2)){
        return res.status(404).json({
            status: "error",
            message: "invalid datatype",
        })
    }
    let result = Number(num1) + Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        res.status(400).json({
            status: "error",
            message:  "underflow",
           
        })
    }
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000 ){
        res.status(400).json({
            status: "error",
            message:  "overflow",
           
        })
    }

   
    res.status(200).json({
        status: "success",
        message:  "the sum of given two numbers",
        result: result
    })

})
// Sub part
app.post("/sub", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValidate(num1, num2)){
        return res.status(404).json({
            status: "failure",
            message: "invalid inputs",
        })
    }
    if(!dataTypes(num1,num2)){
        return res.status(404).json({
            status: "error",
            message: "invalid datatype",
        })
    }

   
    let result = Number(num1) - Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        res.status(400).json({
            status: "error",
            message:  "underflow",
           
        })
    }
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000){
        res.status(400).json({
            status: "error",
            message:  "overflow",
           
        })
    }
    res.status(200).json({
        status: "success",
        message: "the difference of given two numbers",
        result: result
    })


})
// Multiplication part
app.post("/mul", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValidate(num1, num2)){
        return res.status(404).json({
            status: "failure",
            message: "invalid inputs",
        })
    }
    if(!dataTypes(num1,num2)){
        return res.status(404).json({
            status: "error",
            message: "invalid datatype",
        })
    }

   
    let result = Number(num1) * Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        res.status(400).json({
            status: "error",
            message:  "underflow",
           
        })
    }
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000 ){
        res.status(400).json({
            status: "error",
            message:  "overflow",
            
        })
    }
    res.status(200).json({
        status: "success",
        message: "The product of given numbers",
        result: result
    })


})

// Divide part

app.post("/div", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValidate(num1, num2)){
        return res.status(404).json({
            status: "failure",
            message: "invalid inputs",
        })
    }
    if(!dataTypes(num1,num2)){
        return res.status(404).json({
            status: "error",
            message: "invalid datatype",
        })
    }

    if(Number(num2) === 0 ){
      res.status(400).json({
            status: "error",
            message: "Cannot divide by zero",
        })
    }
    let result = Number(num1) / Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000){
        res.status(400).json({
            status: "error",
            message:  "underflow",
           
        })
    }
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000){
        res.status(400).json({
            status: "error",
            message:  "overflow",
            
        })
    }
    res.status(200).json({
        status: "success",
        message: "The division of given numbers",
        result: result
    })

   

})


app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = index;rs

