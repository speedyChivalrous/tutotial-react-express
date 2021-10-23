import express, { json, urlencoded } from "express";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/restapi", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(3001, () => console.log("Server is up and running on port 3001"));
