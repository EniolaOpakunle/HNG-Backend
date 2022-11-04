const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require ('dotenv').config();
const cors = require('cors')
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req, res)=>{
    res.status(200).json({slackUsername: 'Eniola Opakunle', backend: true, age: 17, bio: "I am a Full stack developer. I'm proficient in HTML, CSS, Bootstrap, javascript, react.js, angular, node.js, git and github"})
})
app.post("/", (req, res)=>{
    let result;
    let{operation_type, x, y} = req.body
    let operation = operation_type.toLowerCase()
    if (operation == 'addition'){
        result = eval(parseInt(x) + parseInt(y))
    }else if(operation == 'subtraction'){
        result = eval (x - y)
    }else if(operation == 'multiplication'){
        result = eval(x * y)
    }else{
        result;
    }
    res.status(200).json({slackUsername:'Eniola Opakunle', result: parseInt(result), operation_type: operation , })
})
const PORT = process.env.port || 2300
app.listen(PORT, ()=>{
    console.log(`app is listening on PORT ${PORT}`)
}) 