import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import todoRouter from './routes/todo.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;
const DB_CONNECTION = process.env.DB_CONNECTION;
// const DB_CONNECTION = 'mongodb+srv://sa:nScuMuCTJ83XyBn@cluster0.df0pz.mongodb.net/Todo?retryWrites=true&w=majority';


// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/todo', todoRouter);
app.use('/auth', authRouter);

mongoose
    .connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);


