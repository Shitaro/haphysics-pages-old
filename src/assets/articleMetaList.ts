// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./article-meta-list.json";

export type ArticleMeta = {
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly thumbnail: string,
    readonly category: string[],
    readonly postDate: number,
};

const articleMetaList: ArticleMeta[] = data;

export default articleMetaList;