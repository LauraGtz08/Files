// CARGAR MÓDULOS PARA EL SERVIDOR WEB
const { name } = require("ejs");
const express = require("express")
const filetxt = require("./filetxt.js")
const app = express(); //CONSTRUIR SERVIDOR WEB CON "EXPRESS"
const port = 4000; //DEFINIR EL PUERTO DE ESCUCHA DEL SERVIDOR
app.set("view engine", "ejs") //DEFINIR EL MOTOR DE PLANTILLAS
app.use(express.static("public"))

// MIDDLEWARE DE EXPRESS: EXTRAER 
app.use(express.urlencoded({
    extended: true
}));

//----------------------------------------------------------
// INDEX
app.get("/", function(request, response){
    response.render("index.ejs")
})

//----------------------------------------------------------

//ADD
app.get("/add_filetxt", function(request, response){
    response.render("add.ejs")
})

app.post("/add_file", function(request, response){
    const name = request.body.name
    const content = request.body.content
    filetxt.addFiletxt(name, content)
    response.render("index.ejs")
})

//----------------------------------------------------------

//SELECT

//MOSTRAR EL SELECT
app.get("/read_filetxt", function(request, response){
    const files_array = filetxt.loadFiletxt(); //readFiletxt();
    response.render("read", {
        files_array: files_array
    })
    console.log(files_array)
    
})


app.post("/read_file", function(request, response){
    const name = request.body.name;
    
})

//EDITAR
app.post("/update_file", function(request, response){
    const name = request.body.select;
    const result = filetxt.readFiletxt(name);
    console.log(result.name)   
    console.log(result.content)
    var data = {
        nombre: result.name,
        content: result.content
    }
    response.render("update", {
        data: data
    })
})

app.post("/save_file", function(request, response){
    const name = request.body.name;
    const content = request.body.content;
    console.log("POST: SAVE NOTES")
    filetxt.modifyFiletxt(name, content);
    response.redirect("/")  
})

app.listen(port, function(){
    console.log("Listening at http://localhost:4000/")
})
