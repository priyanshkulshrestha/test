const express = require("express")
const app = express();
const host = "0.0.0.0"
app.get("/", (req, res) => {
    res.status(200).send("hello world ")
})

app.listen(3000)