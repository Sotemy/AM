const express = require("express");
const { loginUser, registerUser, logoutUser, resetUser } = require("../controllers/auth");



const auth_routes = express.Router()

auth_routes.route("/login").post(loginUser);
auth_routes.route("/register").post(registerUser).get();
auth_routes.route("/logout").post(logoutUser).get();
auth_routes.route("/reset").post(resetUser);


module.exports = {auth_routes};