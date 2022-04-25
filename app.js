const express = require("express")
const db = require('./db')
const app = express();
const cors = require('cors');
app.use(cors());
app.get("/ping", async (req, res) => {
    res.send({ fecha: new Date().toISOString() })
})


app.get("/products", async (req, res) => {
    try {
        const [results, fields] = await db.q("select * from Products", [])
        res.send(results)
    } catch (error) {
        res.send({ error: error.message })
    }
})

app.get("/products/:id", async (req, res) => {
    try {
        const [results, fields] = await db.q("select * from Products where ProductID=?", [req.params.id])
        res.send(results)
    } catch (error) {
        res.send({ error: error.message })
    }
})


app.listen(5555, () => {
    console.log("listening")
})