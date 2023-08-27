const express = require("express")
const app = express()
const PORT = 5000
const connectDb = require('./db')
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require('./auth/auth')
const body_parser = require('body-parser')

connectDb();
app.use(cookieParser());
app.use(express.json())
app.use(body_parser.json())
app.use(express.static('public'))
app.use("/api/auth", require("./auth/route"))

app.get('/explore',userAuth,(req, res) => {
    res.sendFile(__dirname+'/public'+'/Explore.html')
})
app.get('/login',(req, res) => {
    res.sendFile(__dirname+'/public'+'/login.html')
})
app.get('/register',(req, res) => {
    res.sendFile(__dirname+'/public'+'/Signup.html')
})

const server = app.listen(PORT, () =>
console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
console.log(`An error occurred: ${err.message}`)
server.close(() => process.exit(1))
})
