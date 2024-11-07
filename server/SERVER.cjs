const http = require('node:http');
const fs = require('node:fs');
const express = require('express');

const app = express();

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

app.get('/', (req, res) => {
    res.end(routes['/']);
});

app.get('/main.css', (req, res) => {
    res.end(routes['/main.css']);
});

app.get('/index.js', (req, res) => {
    res.end(routes['/index.js']);
});

app.get(/\/avatars\/[0-9]|10.webp/, (req, res) => {
    res.end(routes.avatars[req.path]);
});

app.listen(80, () => console.log('server is running...'));


// const server = http.createServer((req, res) => {
//     const { method, url } = req;

//     if (method === 'GET') {
//         switch (url) {
//             case '/': res.end(routes[url]);
//                 break;
//             case '/main.css': res.end(routes[url]);
//                 break;
//             case '/index.js': res.end(routes[url])
//                 break;
//             default:
//                 if (url.startsWith('/avatars/') && url.endsWith('.webp')) {
//                     res.end(routes.avatars[url]);
//                 }
//         }
//     }
// });

// server.listen(80, '0.0.0.0', () => { console.log('server is running...', server.address()) });

