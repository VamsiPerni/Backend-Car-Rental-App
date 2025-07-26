const { getGeminiAiResponse } = require("../../../config/aiclient");

const carsComparisonController = async (req, res) => {
  try {
    const { cars } = req.body;
    const comparisons = await getGeminiAiResponse(`
  Compare ${cars[0]} and ${cars[1]} in JSON format with this structure:
  {
    "parameter": {
      "description": "general comparison",
      "${cars[0]}": "specific value for car 1",
      "${cars[1]}": "specific value for car 2",
      "verdict": "which is better"
    }
  }
  Provide at least 10 comparison parameters.
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
