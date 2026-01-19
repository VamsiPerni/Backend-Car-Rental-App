const dotEnv = require("dotenv");
dotEnv.config();

if (process.env.NODE_ENV !== "production") {
  const dns = require("dns");
  dns.setServers([process.env.DNS_SERVER, process.env.DNS_ALTERNATE_SERVER]);
}

require("./config/db");
require("./utils/emailHelpers");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { apiRouter } = require("./api/v1/routes");

const app = express();

app.use(morgan("dev")); // global middleware

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL_LOCAL,
      process.env.FRONTEND_URL_VERCEL,
      process.env.FRONTEND_URL_CUSTOM_DOMAIN,
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", apiRouter);

app.listen(process.env.PORT, () => {
  console.log("-------- Server started --------");
});
