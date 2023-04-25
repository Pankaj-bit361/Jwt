
const express=require("express")
const { connection } = require("./dbs")
const { userRouter } = require("./routes/user.routes")
const app=express()
app.use(express.json())

app.use("/users",userRouter)

app.listen(8080,async ()=>{
try {
    await connection
    console.log("connected to db")
} catch (error) {
    console.log(error)
}

console.log("connection establisted at port 8080")
})