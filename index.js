const fs = require("fs")
const path = require("path")

 const createABackEnd = ()=>{

    //backend Directory
   const backEndPath = path.join(__dirname,"Back-End")
   fs.mkdir(backEndPath,(err)=>{
    if (err){
        console.log(err)
    }
    console.log("Back-End Directory Created")

    //middlewares
    const middleWaresPath = path.join(backEndPath,"middlewares")
    fs.mkdir(middleWaresPath,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Middlewares Directory Created")
    })
    //database
    const  databasePath = path.join(backEndPath,"database")
    fs.mkdir(databasePath,(err)=>{
        if(err){
            console.log(err)
        }

        // index database
        const indexPath = path.join(databasePath,"index.js")
        fs.writeFile(indexPath,"",(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Index database File Created")
        })

        //config Database
        const configPath = path.join(databasePath,"config.js")
        fs.writeFile(configPath,"",(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Config database File Created")
        })
    })

    //routers
    const  routersPath = path.join(backEndPath,"routers")
    fs.mkdir(routersPath,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Routers Directory Created")
    })
    //controllers
    const  controllersPath = path.join(backEndPath,"controllers")
    fs.mkdir(controllersPath,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Controllers Directory Created")
    })

    //serverEntry
    const filePath = path.join(backEndPath,"index.js")
    fs.writeFile(filePath,"",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Index File Created")
    })
    
    //schmea file 

    const schemaPath = path.join(backEndPath,"schema.sql")
    fs.writeFile(schemaPath,"",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("SQL File Created")
    })

   }) 
 }

createABackEnd()