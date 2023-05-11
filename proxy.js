const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
    target: 'http://localhost:3000'
});

const server = http.createServer((req, res) => {
    proxy.web(req, res);
});

server.listen(80, () => {
    console.log('Proxy server is running on port 80');
});