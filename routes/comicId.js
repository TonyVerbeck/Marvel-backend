const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comic/:comidId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.comicId}?apiKey=${process.env.API_SECRET}`
    );
    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
