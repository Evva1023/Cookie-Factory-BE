const data = require("../utils/data.json");

const orderController = (req, res) => {
    res.json({
        bases: data[0]["COOKIE_BASES"],
        toppings: data[0]["COOKIE_TOPPINGS"]
    });
};

module.exports = {
    orderController,
};