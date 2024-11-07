const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        switch (url) {
            case '/': fs.createReadStream('./lib/index.html').pipe(res);
                break;
            case '/main.css': fs.createReadStream('./lib/main.css').pipe(res);
                break;
            case '/index.js': fs.createReadStream('./lib/index.js').pipe(res);
                break;
            default:
                if (url.startsWith('/avatars/') && url.endsWith('.webp')) {
                    fs.createReadStream(`./lib${url}`).pipe(res);
                }
        }
    }
});

server.listen(80, '0.0.0.0', () => { console.log('server is running...', server.address()) });

