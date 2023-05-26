const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/rockets", async (req, res) => {
  try {
    const response = await axios.get(process.env.SpaceX_URL, {
      headers: {
        Authorization: process.env.Api_Key,
      },
    });
    res.json(response.data);
  } catch (e) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`server is on ${port}`);
});
