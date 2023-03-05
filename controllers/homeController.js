const data = require("../utils/data.json");

const homeController = (req, res) => {
    console.log(data[0]["COOKIE_BASES"]);
    console.log(data[0]["COOKIE_TOPPINGS"][0]);
    res.json({data});
};

module.exports = {
    homeController,
};