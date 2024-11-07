const http = require('node:http');
const fs = require('node:fs');

const avatars = {};
const _avas = Array.from(Array(11), (_, i) => {
    return fs.readFileSync(`./lib/avatars/${i}.webp`);
});

_avas.forEach((avaii, i) => {
    avatars[`/avatars/${i}.webp`] = avaii;
});

const routes = {
    avatars: avatars,
    '/': fs.readFileSync('./lib/index.html'),
    '/main.css': fs.readFileSync('./lib/main.css'),
    '/index.js': fs.readFileSync('./lib/index.js'),
}

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        switch (url) {
            case '/': res.setHeader('Content-Type', 'text/html').end(routes[url]);
                break;
            case '/main.css': res.setHeader('Content-Type', 'text/css').end(routes[url]);
                break;
            case '/index.js': res.setHeader('Content-Type', 'text/javascript').end(routes[url]);
                break;
            default:
                if (url.startsWith('/avatars/') && url.endsWith('.webp')) {
                    res.end(routes.avatars[url]);
                }
        }
    }
});

const PORT = process.env.PORT | 80;
server.listen(PORT, '0.0.0.0', () => { console.log('server is running...', server.address()) });

