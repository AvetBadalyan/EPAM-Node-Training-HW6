const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
  console.log(`Received request for: ${req.url}`);
  const target = "https://" + req.headers.host + req.url;
  console.log(`Redirecting to: ${target}`);

  res.statusCode = 301;
  res.setHeader("Location", target);
  res.end();
});

server.listen(port, () => {
  console.log(
    `HTTP server running on http://localhost:${port} and redirecting to HTTPS`
  );
});
