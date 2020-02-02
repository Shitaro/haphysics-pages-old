// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");
const path = require("path");
const getArticleMeta = require("./get-article-meta");

const articleMetaList = fs.readdirSync("./src/pages/articles").map(article => {
    const { postDate, ...rest } = getArticleMeta(article);
    return {
        id: path.parse(article).name,
        ...rest,
        postDate: new Date(postDate).getTime()
    }
});

module.exports = articleMetaList;