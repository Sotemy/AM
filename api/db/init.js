const mongoose = require("mongoose")

const initDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://admin:admin@cluster0.ei45n.mongodb.net/am?retryWrites=true&w=majority");
        console.log(('DB connected: '+conn.connection.host))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = initDB