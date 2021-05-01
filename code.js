const fs = require('fs');

fs.readFile('links.JSON', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});
