// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");
const path = require("path");
const getArticleMeta = require("./get-article-meta");

const articleMetaList = fs.readdirSync("./src/pages/articles").map(article => {
    const {
        title,
        description,
        thumbnail,
        category,
        tag,
        postDate,
        lastUpdateDate,
    } = getArticleMeta(article);
    return {
        id: path.parse(article).name,
        title,
        description,
        thumbnail,
        category,
        tag,
        postDate: new Date(postDate).getTime(),
        lastUpdateDate: new Date(lastUpdateDate).getTime()
    }
});

module.exports = articleMetaList;