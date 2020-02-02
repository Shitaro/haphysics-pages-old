// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");

// Write all meta data of articles to a JSON file
function writeDatabase(props) {
    fs.writeFile(
        `./src/assets/${props.jsonName}.json`, // Set path to output json file containing names of all articles
        JSON.stringify(props.objectList), // Convert { "article": ["article",...] } to JSON string
        error => { // Handle error
            if (error) throw error;
            console.log("Finished to generate ./src/assets/test.json completely!");
        }
    )
}

module.exports = writeDatabase;