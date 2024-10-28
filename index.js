const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { createTour, getTour } = require("./controllers/dataController");
const {
  getConcerts,
  getAfterParties,
  getMerchandiseStalls,
} = require("./controllers/tourController");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/tour", createTour);
app.get("/tour/:id", getTour);

app.get("/data/concerts", getConcerts);
app.get("/data/afterParties", getAfterParties);
app.get("/data/merchandiseStalls", getMerchandiseStalls);

sequelize
  .authenticate()
  .then(() => console.log("database connected"))
  .catch((error) => {
    console.error("Unable to connect to database", error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
