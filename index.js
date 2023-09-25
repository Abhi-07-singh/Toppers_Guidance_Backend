const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
require ('./db/mongodb');
const router = require('./routers/AskMeRoute');
const cors = require ('cors');

//const bodyParser = require("body-parser");
const AskmeController = require('./Controllers/AskMeController')
const ToppersGetController = require("./Controllers/ToppersGetController")

var bodyParser = require('body-parser')

const PORT = process.env.PORT;

// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())
// const { askMe } = require('./Controllers/AskMeController');
app.use(cors())
app.use(express.json())
app.use(router)
// parse application/x-www-form-urlencoded


app.post('/askme', AskmeController.askMe);
app.get('/toppers', ToppersGetController.get_toppers);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})