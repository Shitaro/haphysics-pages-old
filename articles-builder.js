// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");
const path = require("path");

// Read all articles written by .mdx from "./pages/articles" directory
const articles = fs.readdirSync("./src/pages/articles").map(article => path.parse(article).name);

// Sort articles in order of date
const {read} = require('to-vfile')
const remark = require('remark');
const mdx = require('remark-mdx');
const visit = require("unist-util-visit");

// (async () => {
//     const path = './src/pages/articles/hello.mdx';
//     const file = await read(path);
//     const metaList = [];
//     await remark()
//         .use(mdx)
//         .use(() => (tree) => {
//             visit(tree, 'export', node => {
//                 const meta = JSON.parse(
//                     node.value.replace(/\r?\n/g, '')
//                         .replace(/[\s\S]*?({)([\s\S]*?)(})[\s\S]*?/g, '$1$2$3')
//                         .replace(/([{,])(\s*)([\w\-]+?)\s*:/g, '$1"$3":')
//                 );
//                 metaList.push(meta)
//             })
//         })
//         .process(file);
//     return metaList;
// })().then(value => console.log(value));

// (async () => {
//     const metaList = [];
//     await Promise.all(articles.map(async article => {
//         const path = `./src/pages/articles/${article}.mdx`;
//         const file = await read(path);
//         await remark()
//             .use(mdx)
//             .use(() => (tree) => {
//                 visit(tree, 'export', node => {
//                     const meta = JSON.parse(
//                         node.value.replace(/\r?\n/g, '')
//                             .replace(/[\s\S]*?({)([\s\S]*?)(})[\s\S]*?/g, '$1$2$3')
//                             .replace(/([{,])(\s*)([\w\-]+?)\s*:/g, '$1"$3":')
//                     )
//                     metaList.push(meta)
//                 })
//             })
//             .process(file);
//     }));
//     console.log(metaList)
// })();

fs.writeFile(
    "./src/components/article-list.json", // Set path to output json file containing names of all articles
    JSON.stringify({ article: articles }), // Convert { "article": ["article",...] } to JSON string
    error => { // Handle error
        if (error) throw error;
        console.log("Finished to generate article-list.json completely!");
    }
)