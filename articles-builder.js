// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");
const path = require("path");
const mdx = require('@mdx-js/mdx')
const visit = require("unist-util-visit");

// // Read all articles written by .mdx from "./pages/articles" directory
// const articles = fs.readdirSync("./src/pages/articles").map(article => path.parse(article).name);

// const metaList = [];
// function extractMeta() {
//     return tree => {
//         visit(tree, "export", node => {
//             const hasMeta = node.value.match(/\bmeta\b/g); // Does the string have the word "meta"?
//             if (hasMeta) {
//                 const meta = node.value
//                                  .replace(/[\s\S]*({)([\s\S]*)(})/g, "$1$2$3") // Remove "const export meta = "
//                                  .replace(/\b(title|description|thumbnail|category|postDate)/g, '"$1"'); // Surround keys with double quotes
//                 metaList.push(JSON.parse(meta));
//             }
//         })
//     }
// }

// mdx.sync(mdxText, {
//     remarkPlugins: [
//         [extractMeta]
//     ]
// });

// fs.writeFile(
//     "./src/components/article-list.json", // Set path to output json file containing names of all articles
//     JSON.stringify({ article: articles }), // Convert { "article": ["article",...] } to JSON string
//     error => { // Handle error
//         if (error) throw error;
//         console.log("Finished to generate article-list.json completely!");
//     }
// )

const articleList = [];

// Extract meta data from a mdx file
// options: { articleName: string }
function extractMeta(options) {
    return tree => {
        // Visit "export" node with `unist-util-visit`
        // [unist-util-visit](https://github.com/syntax-tree/unist-util-visit)
        // [how to use](https://mdxjs.com/advanced/plugins)
        visit(tree, "export", node => {
            const hasMeta = node.value.match(/\bmeta\b/g); // Does the string have the word "meta"?
            if (hasMeta) {
                const meta = node.value
                                 .replace(/[\s\S]*({)([\s\S]*)(})/g, "$1$2$3") // Remove "const export meta = "
                                 .replace(/\b(title|description|thumbnail|category|postDate)/g, '"$1"'); // Surround keys with double quotes
                const metaObj = JSON.parse(meta); // Convert string into JSON object
                articleList.push({
                    article: options.articleName,
                    title: metaObj.title,
                    description: metaObj.description,
                    thumbnail: metaObj.thumbnail,
                    categoryList: metaObj.category,
                    postDate: new Date(metaObj.postDate).getTime()
                });
            }
        })
    }
}

// Read all articles written by .mdx from "./pages/articles" directory
fs.readdirSync("./src/pages/articles").forEach(article => {
    const articleName = path.parse(article).name;
    // "If you’re using MDX directly, they can be passed like so:"
    // [Reference](https://mdxjs.com/advanced/plugins)
    const mdxText = fs.readFileSync(`./src/pages/articles/${article}`, "utf8");
    mdx.sync(mdxText, {
        remarkPlugins: [
            [extractMeta, { articleName: articleName }]
        ]
    });
});

// Write all meta data of articles to a JSON file
fs.writeFileSync(
    "./src/components/article-list.json", // Set path to output json file containing names of all articles
    JSON.stringify(articleList), // Convert { "article": ["article",...] } to JSON string
    error => { // Handle error
        if (error) throw error;
        console.log("Finished to generate article-list.json completely!");
    }
)