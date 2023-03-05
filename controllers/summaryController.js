const summaryController = (req, res) => {
    res.json({message: "Thank you for ordering our cookie"});
};

module.exports = {
    summaryController,
};