const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')


const User = require("../db/schemas/users")


const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (email && password) {
        const user = await User.findOne({ email })
        if (user) {
            const password_is_correct = await bcrypt.compare(password, user.password)
            if (password_is_correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
                console.log(req.session)
                return res.status(200).json(req.session.user)
            }
            res.status(400)
            throw new Error("Sorry, try later")
        }
        res.status(400)
        throw new Error("User doesn't exist")
    }
    res.status(400)
    throw new Error("Please fill all fields")
})

const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password, password2 } = req.body;

    if (!username || !password || !email || !password2) {
        res.status(400)
        throw new Error("Please fill all fields")
    }

    // comparing 2 passwords hashes

    const salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, salt)
    const passwords_are_equal = await bcrypt.compare(password2, password_hash)

    if (passwords_are_equal) {
        const user = await User.findOne({ email }) || await User.findOne({ username })
        if (user) {
            res.status(400)
            throw new Error("User exists")
        }

        // creating user
        const new_user = await User.create({
            username,
            email,
            password: password_hash
        })

        // if new user is created then send json else throw error
        if (new_user) {
            return res.status(201).json({
                _id: new_user.id,
                username: new_user.username,
                email: new_user.email,
            })
        }
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const resetUser = (req, res) => {

}

const logoutUser = (req, res) => {

}

module.exports = { loginUser, registerUser, resetUser, logoutUser }