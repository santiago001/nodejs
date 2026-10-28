const http = require('http');
const colors = require('colors');
let nombre = process.env.Nombre || "Santiago Martinez";
const handleServer = function( req, res){
    res.writeHead(200, { 'Content-type': 'text/html' } );
    res.write('<h1> IA 2026 aprendiendo '+ nombre + '</h1>'); //pruebas
    res.end();
    console.log("Realizada petición");
}

const server = http.createServer(handleServer);

server.listen(8080, function(){
    console.log('Server on port 8080'.green);
})