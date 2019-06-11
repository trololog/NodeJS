const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html><head><title>MY first page</title>');
        res.write('<body><h1>Hello from NodeJS</h1>');
        res.write('<form action="/message" method="POST"><input type="text" name="myMessage">');
        res.write('<button type="Submit">Submit</button></form>');
        res.write('</body></head></html>');

        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1].replace('+',' ');

            fs.writeFileSync('message.txt', message);
            
            console.log(parsedBody);   
        });

        
        res.statusCode = 302;
        res.setHeader('Location','/');
        
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>MY first page</title><body><h1>Hello from NodeJS</h1></body></head></html>');
    res.end();
});

server.listen(3000);