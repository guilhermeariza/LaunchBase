const express = require("express")
const nunjucks = require("nunjucks")

const server =  express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.use(express.static('assets'));

server.get("/", function(req, res){
    return res.render("homePage")
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas")
})

server.listen("5000", function(){
    console.log("Server is running.")
})

