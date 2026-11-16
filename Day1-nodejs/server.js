// let http = require("http");

// let server = http.createServer((req,res) => {
//     console.log("Hello i am Server!")
//     res.end("Okay i can hear you man!")
// })

// server.listen(3000, ()=> {
//     console.log("Server is running on Port 3000")
// // })

// let http = require("http");

// let server = http.createServer((req, res)=>{
//     console.log("Yoo my first Server")
//     res.end("Okay I can hear to you")
// })

// server.listen(3000, ()=>{
//     console.log("Server is running on port 3000")
// })

let http = require("http");

let server = http.createServer((req, res)=>{
    console.log("My server")
    res.end("Yoo I am runing a server")
});

server.listen(3000,()=>{
    console.log("server is runng on 3000")
})