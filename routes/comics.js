const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API secret is not provided.");
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_SECRET}&title=${title}`
    );
    console.log(response.data);

    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
