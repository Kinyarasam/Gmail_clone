#!/usr/bin/env node
import mongoose from 'mongoose';

const connectDB = (url) => {
    return mongoose.connect(url);
}

export default connectDB;
// export default function connectDB()
