// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./article-meta-list.json";

type ArticleMeta = {
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    category: string[],
    postDate: number,
};

type ArticleMetaList = ArticleMeta[];

const articleMetaList: ArticleMetaList = data;

export default articleMetaList;