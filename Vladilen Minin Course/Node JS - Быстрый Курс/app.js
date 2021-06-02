const http = require("http");
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'text/html'
  // })
  // if(req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if(err) {
  //       throw err
  //     }
  //     res.writeHead(200, {
  //       "Content-Type": "text/html",
  //     });
  //     res.end(data)
  //   })
  // }else if(req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.writeHead(200, {
  //       "Content-Type": "text/html",
  //     });
  //     res.end(data);
  //   });
  // }

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url)

  const ext = path.extname(filePath);

  if(!ext) {
    filePath += '.html'
  }

  let contentType = 'text/html'

  switch(ext) {
    case '.css': 
      contentType = "text/css"
    break
    case '.js':
      contentType = "text/javascript"
    break;
    default: 
    contentType = "text/html";
  }

  fs.readFile(filePath, (err, content) => {
    if(err) {
      fs.readFile(path.join(__dirname, "public", 'error.html'), (error, data) => {
        if (error) {
          res.writeHead(500);
          res.end("Error");
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(data);
        }
      });
    }else{
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  })
});

const PORT = process.env.PORT || 3000

server.listen(3000, () => {
  console.log(`Server has been started on port ${PORT}`);
});
