// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// How to configure to use MDX in Next.js
// https://mdxjs.com/getting-started/next

const fs = require('fs');
const util = require("util");
const path = require('path');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism]
    }
});

const readdir = util.promisify(fs.readdir);
const articleList = require('./src/assets/article-list.json')
function kebabCase(str){
    return str.split(/[_\s]/g).map(match => match.toLowerCase()).join("-");
}

const makeUniqueCategory = articleList => {
    let categoryList = [];
    articleList.forEach(article => {
        categoryList.push(...article.category.map(kebabCase));
    });
    return [...new Set(categoryList)];
}

module.exports = withMDX({
    pageExtensions: ["mdx", "tsx"],

    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            '/category': { page: '/category' }
        }

        const categories = makeUniqueCategory(articleList);
        categories.forEach(category => {
            paths[`/category/${category}`] = { page: '/category/[category]', query: { category: category }}
        })

        const articles = await readdir("./src/pages/articles");

        articles.forEach(article => {
            const articlePath = path.parse(article).name;
            paths[`/post/${articlePath}`] = { page: `/articles/${articlePath}` }
        });

        return paths;
    }
});