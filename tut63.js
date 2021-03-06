// console.log("Hello World!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end("Hello World");
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Psedu selectors & more designing</title>
      <style>
          .container {
              border: 3px solid #31c6b8;
              margin: 34px auto;
              padding: 14px 20px;
              width: 666px;
              background-color: rgb(111 224 167);
          }
          a {
              text-decoration: none;
              color:black;
          }
          
          /* hover,visited, active are examples of Psedu selectors */
          /* hover is used when cursor is placed on the content */
          a:hover{
              color: rgb(240, 167, 167);
              background-color: #ee0832;
          }
          /* visited is used when that content is clicked and a site is visited */
          a:visited{
              background-color: yellow;
          }
          /* active is use when content is selected */
          a:active{
              background-color: darkblue;
          }
          .btn {
              border: none;
              font-family: cursive;
              background-color: #ec768c;
              padding: 6px;
              cursor: pointer;/*shows cursor as pointer while hovering*/
              font-size: 13px;
              border-radius: 4px;
          }
          /* hover is used when cursor is placed on the content */
          button:hover{
              color: rgb(240, 191, 191);
              background-color: #ee0832;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="conti">
          <h3>This is my heading</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum nam asperiores itaque? Minima sit
              praesentium alias deserunt quod, enim eligendi veritatis ab sed laborum quisquam tenetur consequuntur
              perferendis eos?</p>
          <a href="http://google.com" target="__blank" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});