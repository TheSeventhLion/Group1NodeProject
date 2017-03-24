/**
 * Created by beebe on 3/24/2017.
 **/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mainCtrl = require(`./mainCtrl.js`);
const corsOptions = {
    origin: 'http://localhost:4000'
};

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));




app.get(`/api/data`, mainCtrl.getData);
app.delete(`/api/data`, mainCtrl.deleteData);



app.listen(4000, () => {
    console.log("I'm running on 4000 guy!")
});