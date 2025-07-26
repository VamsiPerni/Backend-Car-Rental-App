const express = require("express");
const {
  getAllProductsController,
  searchProductsController,
  getProductByIdController,
} = require("./controllers");

const productRouter = express.Router();

productRouter.get("/", getAllProductsController);
productRouter.get("/search/", searchProductsController);
productRouter.get("/:id", getProductByIdController);

module.exports = { productRouter };
