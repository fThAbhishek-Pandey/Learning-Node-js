//  file system 
const fs = require("fs");
console.log("before reading");
// Synchronus Reading 
const content1 = fs.readFileSync("Abhishek.txt");
console.log("Synchronus reading"+content1);
//  Asnchronus Reading
fs.readFile("Abhishek.txt", (err,content2)=> {
    if(err){
        return console.log(err);
    }
    console.log("AsynChronus : "+ content2);
});
console.log("after reading ");
console.log("before writing ");
//  Synchronous reading
fs.writeFileSync("Abhishek.txt","I Love You Abhishek");
fs.writeFileSync("createAndWrite.txt","My love Abhishek");
//  Asynchronous reading 
fs.watchFile('output2.txt', "I love you too Abhishek");

console.log("after writing ");