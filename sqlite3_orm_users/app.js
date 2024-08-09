import express from 'express';
import indexRouter from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import sequelize from './models/database.js';

const app = express();
const port = 3000;
// app.get('/', (req, res) => res.send("Hello World.!"));
app.use(express.json())
app.use('/', indexRouter)
app.use(errorHandler)

sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
