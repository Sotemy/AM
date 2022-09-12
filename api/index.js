const express = require("express")
const morgan = require('morgan');
const cors = require('cors');
const session = require("express-session")
const Store = require("connect-mongo")

const { error_handler } = require("./middlewares/error_handler")
const { wallet_routes } = require("./routes/wallet.routes")
const { auth_routes } = require("./routes/auth.routes");
const initDB = require("./db/init");

process.env.NODE_ENV = "development"

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    store: Store.create({
        mongoUrl: 'mongodb+srv://admin:admin@cluster0.ei45n.mongodb.net/am?retryWrites=true&w=majority',
    }),
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 5,
        httpOnly: false
    }
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

initDB()

app.use('/', wallet_routes)
app.use("/auth", auth_routes)

app.use(error_handler)

app.listen(4000, () => {
    console.log(`app is listening to port 4000`)
})

module.exports = app; // for testing