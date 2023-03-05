const {Router} = require("express");
const {orderController} = require("../controllers/orderController");
const orderRouter = Router();

orderRouter.get("/", orderController);

module.exports = {
    orderRouter,
};