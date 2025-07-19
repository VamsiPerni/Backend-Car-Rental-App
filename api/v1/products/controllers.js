const { Product } = require("../../../models/productSchema");

const getAllProductsController = async (req, res) => {
  try {
    const allProducts = await Product.find();

    res.status(200).json({
      isSuccess: true,
      message: "Data Fetched Successfully",
      data: {
        products: allProducts,
      },
    });
  } catch (err) {
    console.log("Error in getting ALL PRODUCTS", err.message);
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { getAllProductsController };
