const http = require("node:http");

const port = Number(process.env.PORT || 8080);

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    res.end(`hello from safehost (${process.env.K_SERVICE || "local"})\n`);
  })
  .listen(port, () => console.log(`listening on ${port}`));
