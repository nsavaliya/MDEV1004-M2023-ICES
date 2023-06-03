import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//using for Database Module
import mongoose  from 'mongoose';
import db from './db';

mongoose.connect(db.localURIclear);

mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on('dis connected', () =>{
    console.log('DisconnectedfromMongoDB');
})
import indexRouter from '../Routes/index';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));

app.use('/', indexRouter);

export default app;
