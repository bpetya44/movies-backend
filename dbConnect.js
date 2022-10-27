const mongoose = require('mongoose')

const dbConnect = () => {
    const connectionParams = {useNewUrlParser:true};
    mongoose.connect(process.env.DB, connectionParams)

    mongoose.connection.on('connected', () =>{
        console.log("Connected to db sucessfully");
    })

    mongoose.connection.on('error', (err) =>{
        console.log("Error while connecting to db:" + err);
    })

    mongoose.connection.on('disconnected', (err) =>{
        console.log("MongoDB disconnected!");
    })
}

module.exports = dbConnect