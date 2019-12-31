// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");
const path = require("path");

// Read all articles written by .mdx from "./pages/articles" directory
const articles = fs.readdirSync("./src/pages/articles").map(article => path.parse(article).name);

fs.writeFile(
    "./src/components/article-list.json", // Set path to output json file containing names of all articles
    JSON.stringify({ article: articles }), // Convert { "article": ["article",...] } to JSON string
    error => { // Handle error
        if (error) throw error;
        console.log("Finished to generate article-list.json completely!");
    }
)