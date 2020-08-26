const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://i1.sndcdn.com/artworks-000612144544-uvh5pg-t500x500.jpg",
        name: "Mayk Brito",
        role: "Instrutor - RocketSeat",
        description: 'Programador Full Stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">RocketSeat</a>',
        links:[
            { name: "GitHub", url: "https://github.com/maykbrito" },
            { name: "Twitter", url: "https://twitter.com/maykbrito" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/" }
        ]
    }

    return res.render("about", {about})
})

server.get("/portfolio", function(req, res){

    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res){
    const id = req.query.id;

    const video = videos.find(function(video){
        return video.id == id
       
    })

    if(!video){
        return res.send("video not found")
    }

    return res.render("video", { item: video })
})

server.listen(3000, function(){
    console.log("server is running")
})