import express from "express";
const app = express()

const port =process.env.PORT || 3000;
app.get("/",(req,res) => {
    res.send("Hey! Welcome To Node Js")
})
app.get("/home",(req,res) => {
    res.send("Hey! Welcome To Home Page")
})
app.get("/profile",(req,res) => {
    res.send("Hey! Welcome To Profile Page")
})
app.get("/about",(req,res) => {
    res.send("Hey! Welcome To About Page")
})
 app.listen(port,()=>{
     console.log("Server Is Running")
 })
