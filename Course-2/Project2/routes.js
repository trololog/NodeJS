const routerHandler = (req,res,next) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type','text/html');

    if(url === '/' && method === 'GET') {
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><meta charset="utf-8"><title>Greeting Page</title></head>');
        res.write('<body><h1>Hello from Server</h1>');
        res.write('<form action="/" method="POST"><input type="text" name="user"><button type="submit">Submit</button></form>');
        res.write('</body></html>');
    } else if(url === '/user' && method === 'GET') {
        
        res.write('<html><head><meta charset="utf-8"><title>User Page</title></head>');
        res.write('<body><ul>');
        res.write('<li>USer 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul></body></html>');
    } else if(url === '/' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
    }

    res.end();
};

module.exports.handler = routerHandler;