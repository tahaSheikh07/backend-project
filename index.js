import express from 'express';
import mongoose from 'mongoose';
const app = express();
import 'dotenv/config'
import cors from 'cors'
import http from 'http';


app.use(express.json()); 
app.use(cors("*"))

//connect to database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err))





app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT, () =>
   console.log(`Server is running on PORT ${process.env.PORT}`));
