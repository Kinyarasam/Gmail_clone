#!/usr/bin/env node
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config();

// import router from 'expressRouter';
const router = express.Router()

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Hello \n');
    res.end('Hello');
});

/**
 * Start server
 * 
 * @function.
 * @void.
 */
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI_1);
        app.listen(port, (req, res) => {
            console.log(`Server has started on port: ${port}`);
        });
    } catch (err) {
        console.log('******************** Error Connecting to DB *************************');
        console.log(err);
        console.log('******************** Error Connecting to DB *************************');
        
    }
}

start();
