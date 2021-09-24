const fs = require("fs");

fs.readFile("./lorem-ipsum.txt", "utf8", (err, data) => {
    if(err) {
        return console.log(err);
    } 
    console.log("----------");
    console.log(data);
    console.log("----------");

    fs.rename("./lorem-ipsum.txt", "./gibberish.txt", (err) => {
        if (err) {
            return console.log(err);
        }
        
        console.log("File has been renamed!");
    });
    
});

