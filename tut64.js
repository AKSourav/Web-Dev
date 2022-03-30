const fs = require("fs");
let text = fs.readFileSync("./tut64Files/del.txt","utf-8");
console.log("The original content:\n"+text);

text=text.replace("browser", "Rohan!!!");
console.log("The edited text:\n"+text);

console.log("Creating a new files...");
fs.writeFileSync("./tut64Files/Rohan.txt",text);
