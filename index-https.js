const https = require('https');
const fs = require('fs');

const port = 443

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is your HTTPS server!');
});

server.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/`);
});