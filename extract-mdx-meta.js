// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// The functions
// - parseOptions
// - isExport()
// - isMeta()
// - getMetaKey()
// - getMetaValue()
// - extractMeta()
// are:
// Copyright (c) Michael Novotny
// Released under the MIT license in remark-mdx-metadata, https://github.com/manovotny/remark-mdx-metadata
// see https://opensource.org/licenses/MIT

const fs = require('fs')
const path = require("path")
const mdx = require('@mdx-js/mdx')
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const kebabCase = str => {
    return str.split(/[_\s]/g).map(match => match.toLowerCase()).join("-");
}

const parseOptions = {
    plugin: ["jsx"],
    sourceType: "module"
};

const isExport = child => child.type === "export";
const isMeta = child => {
    let metaFound = false;

    const ast = parse(child.value, parseOptions);

    traverse(ast, {
        VariableDeclarator: path => {
            if (path.node.id.name === "meta") {
                metaFound = true;

                return;
            }
        }
    });

    return metaFound;
}

const getMetaKey = property => property.key.name;
const getMetaValue = property => {
    if (property.value.type === "ArrayExpression") {
        return property.value.elements.map(e => e.value);
    }
    return property.value.value;
}

const getMetaIndex = children => {
    let metaIndex = -1;

    children.forEach((child, index) => {
        if (isExport(child) && isMeta(child)) {
            metaIndex = index;
        }
    })

    return metaIndex;
}

const articleList = [];
const extractMeta = (options = {}) => {
    return tree => {
        const children = tree.children;
        const metaIndex = getMetaIndex(children);
        const meta = children[metaIndex].value;

        const properties = {};
        const ast = parse(meta, parseOptions);
        traverse(ast, {
            VariableDeclarator: path => {
                path.node.init.properties.forEach(property => {
                    properties[getMetaKey(property)] = getMetaValue(property);
                });
            }
        });
        const metaObj = { name: options.articleName ,...properties };
        articleList.push(metaObj);
    }
}

// Read all articles written by .mdx from "/src/contents" directory
fs.readdirSync("./src/contents").forEach(article => {
    const articleName = path.parse(article).name;
    // "If you're using MDX directly, they can be passed like so:"
    // [Reference](https://mdxjs.com/advanced/plugins)
    const mdxText = fs.readFileSync(`./src/contents/${article}`, "utf8");
    mdx.sync(mdxText, {
        remarkPlugins: [
            [extractMeta, { articleName: articleName }]
        ]
    });
});

// Write all meta data of articles to a JSON file
fs.writeFile(
    "./src/assets/article-list.json", // Set path to output json file containing names of all articles
    JSON.stringify(articleList), // Convert { "article": ["article",...] } to JSON string
    error => { // Handle error
        if (error) throw error;
        console.log("Finished to generate ./src/assets/article-list.json completely!");
    }
)