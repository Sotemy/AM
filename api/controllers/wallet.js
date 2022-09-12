const axios = require("axios")
const asyncHandler = require('express-async-handler')

const check_eth_wallet = asyncHandler(async(req, res) => {

    const {address} = req.body

    if (address) {
        const response = await axios("https://api.bscscan.com/api?module=account&action=balance&address="+address+"+23B896f1a6E&apikey=QUUBZUA85Q3CZR6EGNBW83XHUFPG3HC8U9")

        if (response.data.status === "0") {
            res.status(400)
            throw new Error("Wallet wasn't found")
        }
            return res.status(200)
    }
    throw new Error("Fill all fields please!")
})

module.exports = check_eth_wallet
