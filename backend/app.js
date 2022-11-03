import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./routes/index.js";

//config .env
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(route);

//Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
