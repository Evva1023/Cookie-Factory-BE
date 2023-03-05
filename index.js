const express = require("express");
const {homeRouter} = require("./routes/home");
const {orderRouter} = require("./routes/order");
const {summaryRouter} = require("./routes/summary");

const app = express();
app.use("/", homeRouter);
app.use("/order", orderRouter);
app.use("/summary", summaryRouter);

app.listen(8000, () => console.log("Server started at 8000"));