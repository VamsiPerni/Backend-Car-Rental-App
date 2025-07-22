const express = require("express");
const { authRouter } = require("./auth/routes");
const { usersRouter } = require("./users/routes");
const { userAuthenticationMiddleware } = require("./middleware");
const { productRouter } = require("./products/routes");
const { llmRouter } = require("./llm/routes");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

apiRouter.use(userAuthenticationMiddleware); // authentication
// all the routes below this middleware are now (protected APIs)

apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/ai", llmRouter);

module.exports = { apiRouter };
