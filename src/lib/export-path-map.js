// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require('fs');
const util = require("util");
const path = require('path');

const readdir = util.promisify(fs.readdir);
const articleList = require('../assets/article-list.json')
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

async function exportPathMap() {
    const paths = {
        '/': { page: '/' },
        '/category': { page: '/category' }
    }

    const categories = makeUniqueCategory(articleList);
    categories.forEach(category => {
        paths[`/category/${category}`] = { page: '/category/[category]', query: { category: category } }
    })

    const articles = await readdir("./src/contents");

    articles.forEach(article => {
        const articleName = path.parse(article).name;
        paths[`/articles/${articleName}`] = { page: "/articles/[article]", query: { article: articleName } }
    });

    return paths;
}

module.exports = exportPathMap;