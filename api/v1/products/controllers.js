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

const searchProductsController = async (req, res) => {
  try {
    const { q = "", skip = 0, limit = 10 } = req.query;

    const query = {
      $or: [
        { title: new RegExp(q, "i") },
        { brand: new RegExp(q, "i") },
        { model: new RegExp(q, "i") },
        { location: new RegExp(q, "i") },
      ],
    };

    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    res.status(200).json({
      isSuccess: true,
      message: "Products fetched successfully",
      data: { products },
      total,
    });
  } catch (err) {
    console.error("Error in searchProductsController:", err.message);
    res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};

module.exports = { getAllProductsController, searchProductsController };
