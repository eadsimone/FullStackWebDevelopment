const http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer((request, response) => {
    const addr = request.url,
        q = url.parse(addr, true);
    let filePath = '';

    if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        filePath = (__dirname + '/index.html');
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            throw err;
        }

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();

    });

    let auxFile = (__dirname + '/log.txt');
    fs.appendFile(auxFile, 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Added to log.');
        }
    })
}).listen(8080);
