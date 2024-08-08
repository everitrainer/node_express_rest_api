import express from 'express';
import setupDatabase from './config/database.js'
import router from './routes/index.js';

const app = express();

app.use(express.json());

// setup router
app.use(router)

app.listen(4000, () => console.log("Server Started"))