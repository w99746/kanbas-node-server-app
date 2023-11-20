import express from 'express';
import cors from "cors";
import Hello from "./hello.js"
import Lab5 from './lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express()

app.use(cors());
app.use(express.json());
Hello(app)
ModuleRoutes(app);
Lab5(app);
CourseRoutes(app);

app.listen(process.env.PORT || 4000)