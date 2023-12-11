const htpp = require("http")
const fs = require("fs")

const daley =  (ms ) => {
    return new Promise ((res, req)=> {
        setTimeout(()=> {
            res()
        },ms)
     
    })
}

const server = htpp.createServer( async (req, res)=> {
    switch(req.url) {
        case "/about": {
           await daley(3000)
           res.write("about")
           res.end()
           
            break
        }
        case "/home": {
            fs.readFile("pages/home.html", ((err, data)=> {
                if(err) res.write("err")
                else res.write(data)
                res.end()
   
               }))
              
               break  
        }
        
        default: {
            
            res.write("404")
            res.end()
            break           
        }
    }
   

   
 
})

server.listen(3003)