const { getGeminiAiResponse } = require("../../../config/aiclient");

const carsComparisonController = async (req, res) => {
  try {
    const { cars } = req.body;
    const comparisons = await getGeminiAiResponse(`
        Compare these two cars, the name of cars is ${cars[0]} and ${cars[1]}.After comparison only share JSON Format response back without any extra indentation or any extra comments.The key should be comparison parameter and the value should be the short comparion result of these two cars on that parameter    
    `);

    console.log(comparisons);
    const comparisonObjStr = comparisons
      .replace("```json", "")
      .replace("```", "");

    const comparisonObj = JSON.parse(comparisonObjStr);

    res.status(200).json({
      isSuccess: true,
      message: "Comparison Done",
      data: comparisonObj,
    });
  } catch (err) {
    console.log("Error while comapring errors", err.message);
    res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Erorr", data: {} });
  }
};

module.exports = { carsComparisonController };
