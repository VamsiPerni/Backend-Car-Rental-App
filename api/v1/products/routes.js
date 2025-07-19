const express = require("express");
const { getAllProductsController } = require("./controllers");

const productRouter = express.Router();

productRouter.get("/", getAllProductsController);

module.exports = { productRouter };
