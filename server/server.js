const http = require('http');
const colors = require('colors');
const handleServer = function( req, res){
    res.writeHead(200, { 'Content-type': 'text/html' } );
    res.write('<h1> Hola mundo desde NodeJs </h1>');
    res.end();
    console.log("Realizada petición");
}

const server = http.createServer(handleServer);

server.listen(8080, function(){
    console.log('Server on port 8080'.green);
})