import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { loginValidation, registerValidation } from "./validations/validations.js";
import { register, getMe, login } from "./controllers/TodoController.js";
import checkAuth from './utils/checkAuth.js';
import { projectCreate, myProject } from "./controllers/ProjectController.js";


mongoose
.connect("mongodb+srv://admin:admin@cluster0.pcqiyvl.mongodb.net/todo?retryWrites=true&w=majority")
.then(() => console.log('DB OK'))
.catch((err) => console.log('DB ERROR', err));

const app = express();
app.use(express.json());
app.use(cors());
app.listen(4000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("server ok");
});

app.post('/auth/register', registerValidation, register);
app.get('/auth/getme', checkAuth, getMe);
app.post('/auth/login', loginValidation, login);

app.post('/create/project', checkAuth, projectCreate);
app.get('/myproject', checkAuth, myProject);