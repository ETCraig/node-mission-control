const http = require("http");
const mongoose = require("mongoose");
require('dotenv').config();

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");
const { mongoConnect } = require('./services/mongo');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

startServer();
