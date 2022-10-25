require("dotenv").config();
const port = process.env.APP_PORT ?? 5000;

const express = require("express");

const app = express();

const welcome = (req, res) => {
  res.send("Welcoe to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const userHandler = require("./userHandler");

// app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/users", userHandler.getUsers);
app.get("/api/users/:id", userHandler.getUsersById);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
