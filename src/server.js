// Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Inicio e configuracao do servidor (server)
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))

// configura arquivos estáticos (css, script, image)
.use(express.static("public"))

// rotas da aplição
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start o servidor
.listen(5500)