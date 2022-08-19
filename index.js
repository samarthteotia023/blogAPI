

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/myapi")
 
  
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);



app.listen("8000", () => {
  console.log("Backend is running.");
});