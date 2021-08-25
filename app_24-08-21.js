//Path absoluto = 
//Path relativo = só pega o caminho de onde esse arquivo está... não dá para ir mais para atrás de onde esse arquivo está
//                Por exemplo... aqui... /../../ independente da quantidade de ../ vc colocar, sempre dará nodejsstudy
//                Isso não acontece com path absoluto... se vc quiser ir descendo os niveis de pastas é suficiente colocar ./../../ e você poderá
//                chegar até o desktop se quiser, por exemplo

const http = require('http');

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// http.createServer(function(req, res){

// });

const server = http.createServer((req, res) => {
    console.log(req);
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>My First Page</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body>');
    res.write('</html>');
});

server.listen(3000);