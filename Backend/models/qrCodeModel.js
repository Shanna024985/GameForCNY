const { query } = require("../services/dbConnection")

module.exports.redeemQrCode = function redeemQrCodes(qrCodeId, memberId) {
    let sql = "SELECT * FROM qr_code_redemtption($1,$2);"
    return query(sql, [memberId, qrCodeId]).then(function (result) {
        return result.rows
    })
}