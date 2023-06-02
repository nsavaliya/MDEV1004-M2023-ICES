import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//using for Database Module
import mongoose  from 'mongoose';
import db from './db';

mongoose.connect(db.localURI);

import indexRouter from '../Routes/index';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));

app.use('/', indexRouter);

export default app;
