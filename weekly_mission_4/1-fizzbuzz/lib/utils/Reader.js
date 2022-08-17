class reader {
    static readJsonFile(path) {
        const fs = require("fs");
        const rawdata = fs.readFileSync(path);
        console.log(JSON.parse(rawdata));
        return JSON.parse(rawdata);
    }
}
module.exports = reader;
