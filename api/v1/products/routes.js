const express = require("express");
const {
  getAllProductsController,
  searchProductsController,
} = require("./controllers");

const productRouter = express.Router();

productRouter.get("/", getAllProductsController);
productRouter.get("/search/", searchProductsController);

module.exports = { productRouter };
