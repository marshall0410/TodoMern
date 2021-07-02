import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoute from './routes/todo.js';

const PORT = 5000 || process.env.PORT;
const CONNECTION_URL =
  'mongodb+srv://sa:nScuMuCTJ83XyBn@cluster0.df0pz.mongodb.net/Todo?retryWrites=true&w=majority';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

mongoose
    .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);

// routes
app.use('/Todo', todoRoute);
