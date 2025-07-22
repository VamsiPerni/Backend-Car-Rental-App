const express = require("express");
const { carsComparisonController } = require("./controller");

const llmRouter = express.Router();

llmRouter.post("/cars/comparisons", carsComparisonController);

module.exports = { llmRouter };
