const express = require('express');
const app = express();
require ('dotenv').config();
const cors = require('cors')
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res)=>{
    res.status(200).json({slackUsername: 'Eniola Opakunle', backend: true, age: 17, bio: "I am a Full stack developer. I'm proficient in HTML, CSS, Bootstrap, javascript, react.js, angular, node.js, git and github"})
})
const PORT = process.env.port || 2300
app.listen(PORT, ()=>{
    console.log(`app is listening on PORT ${PORT}`)
}) 