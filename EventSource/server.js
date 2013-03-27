var http = require('http');
var url = require('url');
var fs = require('fs');

var html = fs.readFileSync('./client.html', 'utf-8');
var id = 0;
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    if(req.headers.accept && req.headers.accept == 'text/event-stream'){
        if( pathname === '/events' ){
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
            });
            setInterval(function(){
                res.write('id:' + id++ + '\n');
                res.write('data:' + new Date() + '\n\n');
            }, 5000);
        }else{
            res.writeHead(404);
            res.end();
        }
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    }
}).listen(9000);
