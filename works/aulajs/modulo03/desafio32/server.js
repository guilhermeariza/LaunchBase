const express =  require("express")
const nunjucks = require("nunjucks")

const server = express()
const cursos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false   
})
server.listen(5000, function(){
    console.log("Server on")
})
server.get("/", function(req, res){
    const about = {
            head: "ROCKETSEAT",
            links:[
                {name: "Comunidade", url: "https://discordapp.com/invite/gCRAFhc", link_target: "_blank"},
                {name: "Email", url: "mailto:oi@rocketseat.com.br", link_target: "_blank"},
                {name: "Telefone", url: "tel:+5547992078767", link_target: "_blank"},
                {name: "Conteúdos", url: "/courses", link_target: ""}
            ],
            footer_links:[
                {name: "GitHub", url: "https://github.com/Rocketseat"},
                {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
                {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
            ]
    }
    return res.render("about", {about})
})
server.get("/courses", function(req, res){
    return res.render("courses", { items: cursos })
})
server.use(function(req, res) {
    res.status(404).render("not-found");
  });


