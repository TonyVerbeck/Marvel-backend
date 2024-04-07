const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const characterIdRoutes = require("./routes/characterId");
app.use(characterIdRoutes);

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const comicIdRoutes = require("./routes/comicId");
app.use(comicIdRoutes);

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Thanos is coming for you" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Let's kill Thanos 🥊");
});
