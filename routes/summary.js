const {Router} = require("express");
const {summaryController} = require("../controllers/summaryController");
const summaryRouter = Router();

summaryRouter.get("/", summaryController);

module.exports = {
    summaryRouter,
};