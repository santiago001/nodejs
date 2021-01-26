const http = require('http');
const colors = require('colors');
let nombre = process.env.Nombre || "Santiago Martinez";
const handleServer = function( req, res){
    res.writeHead(200, { 'Content-type': 'text/html' } );
    res.write('<h1> Hola mundo '+ nombre + '</h1>');
    res.end();
    console.log("Realizada petición");
}

const server = http.createServer(handleServer);

server.listen(8080, function(){
    console.log('Server on port 8080'.green);
})