const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const characterIdRoutes = require("./routes/charactersid");
app.use(characterIdRoutes);

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const comicIdRoutes = require("./routes/comicsid");
app.use(comicIdRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Thanos is coming for you" });
});

app.listen(process.env.PORT, () => {
  console.log("Let's kill Thanos 🥊");
});
