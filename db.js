// db.js
const Mongoose = require("mongoose")
const localDB = `mongodb+srv://Kirenga123:Kirenga123@cluster0.v9lpw.mongodb.net/Users`
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB