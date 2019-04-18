const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const server = express();
const quotesRoute = require("./routes/quotesRoute");
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan("short"));
server.use("/", quotesRoute);
module.exports = server;
