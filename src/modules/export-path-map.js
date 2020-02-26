// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Write database
const articleMetaList = require("./generate-article-meta-list");
const categoryList = require("../assets/category-list.json");
const tagList = require("../assets/tag-list.json");
const writeDatabase = require("./write-database");
writeDatabase({
    objectList: articleMetaList,
    jsonName: "article-meta-list"
})

async function exportPathMap() {
    const paths = {
        '/': { page: '/' },
        '/category': { page: '/category' },
        '/tag': { page: '/tag' },
    };

    categoryList.forEach(category => {
        paths[`/category/${category.id}`] = { page: `/category/[category]`, query: { category: category.id }}
    });

    tagList.forEach(tag => {
        paths[`/tag/${tag.id}`] = { page: `/tag/[tag]`, query: { tag: tag.id }}
    });

    articleMetaList.forEach(article => {
        paths[`/articles/${article.id}`] = { page: `/articles/${article.id}` }
    });

    return paths;
}

module.exports = exportPathMap;