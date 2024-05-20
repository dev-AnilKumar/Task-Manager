const { default: mongoose } = require("mongoose")

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log("database connection failed")
        console.log(error)
    }
}

export default dbConnect;