const express = require("express")
const nunjucks = require("nunjucks")

const server =  express()
const recipes = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk") 

nunjucks.configure("views", {
    express:server
})

server.use(express.static('assets'));

server.get("/", function(req, res){
    return res.render("homePage", {items: recipes})
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {items: recipes})
})

server.listen("5000", function(){
    console.log("Server is running.")
})

server.get("/pageRecipes", function(req, res) {
    const id = req.query.id
    
    const recipe = recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!recipe){
        return res.send("Recipe not found!")
    }

    res.render("pageRecipes", {item: recipe})
    
})


