const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const databaseManager = require('./helpers/mongo_manager')
const authRouter = require('./modules/routes/authRouter')
const response = require('./Responses-handler/response');
const multerManager = require('./helpers/multerManager');

const app = express();

app.use("/v1/auth/uploadAvatar",multerManager.uploadSingleProfile())

app.use('/public',express.static('public'))

// support parsing of application/json type post data
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
    console.log(req.body)
    const message = "This is expected error: " + error.message
    return response.okHttpResponseFailure({
        response: res,
        message: message,
    })
})

dotenv.config()


databaseManager.connectedToDatabase()


app.use("/v1/auth",authRouter)

app.listen(3000,()=>{
    console.log("Server is listening on port => 3000");
})