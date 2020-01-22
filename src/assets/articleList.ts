// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import meta from "./article-list.json";

const metaDataConverter = (metaData: ArticleMeta) => {
    const {
        category: categoryList,
        postDate: postDateStr,
        ...rest
    } = metaData;

    return {
        categoryList,
        postDate: new Date(postDateStr).getTime(),
        ...rest
    }
}

export const articleList = meta.map(metaDataConverter)