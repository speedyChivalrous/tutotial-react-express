import { config } from "dotenv";
import express, { json, urlencoded } from "express";
import path from "path";

config();
const app = express();

const __dirname = path.resolve();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/restapi", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Server is up and running on port " + port));
