import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.ha9xjth.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo`;
    
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () =>{
        console.log("connected to database");
    })

    mongoose.connection.on('disconnected', () =>{
        console.log("database disconnected");
    })

    mongoose.connection.on('error', (error)=>{
        console.log('Error while connecting with database', error.message);
    })

}

export default Connection;