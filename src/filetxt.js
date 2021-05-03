// https://nodejs.dev/learn/writing-files-with-nodejs
const fs = require("fs")
const chalk = require("chalk")
const { name } = require("ejs")
const path = "./files/"
const extension = ".txt"

const addFiletxt = function(name,content){
    console.log("FUNCTION ADD FILE")
    fs.appendFile(path+name+extension, content, (error)=>{
        if(error){
            throw error;
        }
    })
    console.log("FILE CREATED")
   
}

const listFiletxt = function(){
    const files = loadFiletxt()
    files.forEach(function(elemento){
        console.log("Name: "+ elemento.name + " Content: "+ elemento.content)
    })
    return files
}


const saveFiletxt = function(files){
    fs.appendFile(name+extension)
}

// const loadFiletxt = function(){
//     try{
//         dataBuffer = fs.readFileSync(name+extension)
//         data = dataBuffer.toString()
//         console.log(data)
//         return data
//     }catch (e){
//         console.log("File does not exist!")
//         return []
//     }
// }

const readFiletxt = function(name){
    const files = loadFiletxt()
    console.log(name)
    //const foundFile = files.find((foundFile) => foundFile === name)
    const foundFile = files.find(function(elemento){
        if(elemento === name){
            console.log("READFILETXT - FOUND FILE:")
            //fs.readFileSync(name, 'utf8');
            content = fs.readFileSync("files/"+name, 'utf8');
            console.log(content);
            //console.log("Content: " + foundFile.content)
        }
    })
    return {
        content:content,
        name:name
    }
}

const loadFiletxt = function(){
    files = fs.readdirSync(path)
    console.log("LOAD/FILES: "+files)
    return files
}
 

const modifyFiletxt = function(name, content){
    console.log("FUNCTION EDIT FILE")
    console.log("File a modificar: ", name)

    try{
        fs.writeFileSync(path+name, content)
    } catch (e){
        console.log("ERROR")
    }
    
   

}


module.exports ={
    addFiletxt:addFiletxt,
    readFiletxt:readFiletxt,
    loadFiletxt:loadFiletxt,
    modifyFiletxt:modifyFiletxt,
    saveFiletxt:saveFiletxt
}