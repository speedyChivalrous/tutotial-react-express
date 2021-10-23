import { config } from "dotenv";
import express, { json, urlencoded } from "express";

config();
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/restapi", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Server is up and running on port " + port));
