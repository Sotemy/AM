const express = require("express")

const check_eth_wallet = require("../controllers/wallet")


const wallet_routes = express.Router()

wallet_routes.route("/check_eth_wallet").post(check_eth_wallet);

wallet_routes.route("/add").post().get();
wallet_routes.route("/edit").post().get();
wallet_routes.route("/delete").post();

wallet_routes.route("/settings").post().get();

module.exports = {wallet_routes};