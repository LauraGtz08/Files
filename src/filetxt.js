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

const readNotes = function(title){
    const notes = loadNotes()
    const foundNote = notes.find(function(elemento){
        return elemento.title === title
    })

    if(foundNote){
        console.log("Title: " + foundNote.title + "Body: " + foundNote.body)
    }
    return foundNote
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

const loadFiletxt = function(){
    try{
        dataBuffer = fs.readFileSync(name+extension)
        data = dataBuffer.toString()
        console.log(data)
        return data
    }catch (e){
        console.log("File does not exist!")
        return []
    }
}
// const readFiletxt = function(name){
//     const files = loadFiletxt()
//     const foundFile = files.find(function(elemento){
//         return elemento.name === name
//     })

//     if(foundFile){
//         console.log("Title: " + foundFile.name + "Body: " + foundFile.content)
//     }
//     return foundFile
    
//     // const files = fs.readdirSync(path);
//     // console.log("file.js: "+files)
//     // return files
// }

// const loadFiletxt = function(){
//     files = fs.readdirSync(path)
//     console.log("LOAD/FILES: "+files)
//     return files
// }
 

const modifyFiletxt = function(name, nname, ncontent){
    console.log("FUNCTION EDIT FILE")
    let files = readFiletxt(name)
    const beforeFiles = readFiletxt(name)
    console.log("File a modificar: ", name)

    files.forEach(function(elemento){
        if (elemento.name === name){
            elemento.name = nname
            elemento.content = ncontent
            console.log("[ FILE MODIFICADO]")
        }
    })

   saveFiletxt(files)
    

}

// const saveFiletxt = function(files){
//     fs.appendFile(path+name+extension, content, (error)=>{
//         if(error){
//             throw error;
//         }
//     })
//     console.log("FILE SAVED")
// }

module.exports ={
    addFiletxt:addFiletxt,
    readFiletxt:readFiletxt,
    //listFiletxt:listFiletxt,
    loadFiletxt:loadFiletxt,
    modifyFiletxt:modifyFiletxt,
    saveFiletxt:saveFiletxt
}