const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOption = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption));
app.use('/', router);


const port = 8080;
const server = app.listen(port, () => {
    console.log("Server is runninng on port " + port);
})
