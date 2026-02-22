let model = require("../models/moneyModel")
module.exports.getMoney = (req, res, next) => {
    let userid = res.locals.userId
    model.getMoneyByUserId(userid)
        .then((value) => {
            if (value[0] == undefined) {
                res.status(200).json({ money: 0 })
            } else {
                res.status(200).json(value[0])
            }
        }).catch(function (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        });
}

module.exports.leaderboard = (req, res, next) => {
    model.getLeaderboardOfMoneys()
        .then((value) => {
            res.status(200).json(value)
        }).catch(function (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        });
}