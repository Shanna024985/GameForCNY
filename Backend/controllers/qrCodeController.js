let model = require("../models/qrCodeModel")
module.exports.redeemQrCode = (req, res, next) => {
    model.redeemQrCode(req.body.qrCodeId, res.locals.userId)
        .then((value) => {
            res.status(201).json(value[0])
        }).catch(function (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        });
}