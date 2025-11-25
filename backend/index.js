const db = require("./db")
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const bcrypt = require("bcrypt")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowHeaders: ["Content-Type"]
}))

app.post("/signup", (req, res) => {
    try {
        const hashed = bcrypt.hashSync(req.body.password, 10)
        const newUser = db.prepare(`INSERT INTO users (email, password) VALUES(?,?) `) .run(req.body.email, hashed)
        const createdUser = db
            .run(`SELECT * FROM users WHERE ID = ?`)
            .get(newUser.lastInsertRowid)
        res.json(201).json(createdUser)
    }   catch(error) {
        console.error(error)
        res.json(error)
    }
})

app.use(express.json())

app.listen("3000", () => {
    console.log("Порт3000")
})