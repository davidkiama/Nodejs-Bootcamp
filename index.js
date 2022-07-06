const fs = require("fs");

//Blocking, sycnhronous way
// const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on date ${Date.now()}`;
// console.log(textInput);
// fs.writeFileSync("./txt/output.txt", textOutput);
// console.log("File has been written.");

//Non-blocking, asycnhronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/writtenAsync.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("File has been written");
      });
    });
  });
});

console.log("Will read this file...");
