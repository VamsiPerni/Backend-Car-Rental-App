const express = require("express");
const { authRouter } = require("./auth/routes");
const { usersRouter } = require("./users/routes");
const { userAuthenticationMiddleware } = require("./middleware");
const { productRouter } = require("./products/routes");
const { llmRouter } = require("./llm/routes");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

// apiRouter.use(userAuthenticationMiddleware); // authentication  // this line will protect the below written urls as it will check everytime whether user is logggedIn or not , if user is loggedIn then only it will allow to route to the below url's or else we must login-first , instead of that we are showing some components without loggin-in. So, we need to do pass this as argument when we are calling/mentioning the route as below
// all the routes below this middleware are now (protected APIs)

apiRouter.use("/users", userAuthenticationMiddleware, usersRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/ai", userAuthenticationMiddleware, llmRouter);

module.exports = { apiRouter };
