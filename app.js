const express = require('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config()
const databaseManager = require('./helpers/mongo_manager')
const authRouter = require('./modules/routes/authRouter')

databaseManager.connectedToDatabase()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1/auth",authRouter)

app.listen(3000,()=>{
    console.log("Server is listening on port => 3000");
})