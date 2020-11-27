const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(fileUpload({
    createParentPath: true
}))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan("dev"))

app.post("/picture", async(req, res) => {
    try
}
)