const { query } = require("../services/dbConnection")

module.exports.getMoneyByUserId = function getMoneyByUserId(userId) {
    let sql = "SELECT money FROM money_earned WHERE member_id = $1;"
    return query(sql, [userId]).then(function (result) {
        return result.rows
    })
}
module.exports.getLeaderboardOfMoneys = function getLeaderboardOfMoneys() {
    let sql = "SELECT members.id, money_earned.money, members.username FROM money_earned INNER JOIN members ON member_id = members.id ORDER BY money_earned.money DESC"
    return query(sql, []).then(function (result) {
        return result.rows
    })
}