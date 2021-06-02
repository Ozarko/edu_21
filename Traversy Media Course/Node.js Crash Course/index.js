const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
  //     if(err) {
  //       throw err
  //     }
  //     res.writeHead(200, {
  //       "Content-Type": "text/html",
  //     });
  //     res.end(content);
  //   });
  // }
  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html",
  //       });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     {name: 'John Dou', age: 37},
  //     {name: 'Nazar Ozarko', age: 27},
  //   ]
  //     res.writeHead(200, {
  //       "Content-Type": "application/json",
  //     });
  //     res.end(JSON.stringify(users));
  // }

  // Build file path

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of path

  let extname = path.extname(filePath);

  if (!extname) {
    filePath += ".html";
  }

  let contentType = "text/html";

  // Check ext and set content type

  switch (extname) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default:
      contentType = "text/html";
  }
  // Read file

  fs.readFile(filePath, (err, content) => {
    console.log(content);
    if (err) {
      if (err.code === "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (errr, data) => {
            res.writeHead(200, {
              "Content-Type": "text/html",
            });
            res.end(data);
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
