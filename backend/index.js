import express from "express";
import { mongoDbURL, PORT } from "./config.js";
import mongoose from 'mongoose';
import todosRoute from "./routes/todoRoutes.js"
import cors from 'cors';


const app = express();

// Make sure npm run dev is through cd backend, not cd module1

app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World") // 234 is a good code, means it was accepted

});

app.use('/api/todos', todosRoute);

mongoose.connect(mongoDbURL)
    .then(()=> {
        console.log("App connected to databse")
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error)=> {
        console.log(error);
    })

