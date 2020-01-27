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

type CategoryTable = {
    categoryName: string,
    kebabCase: string
}

function kebabCase(str:string): string {
    return str.split(/[_\s]/g).map(match => match.toLowerCase()).join("-");
}

const categoryListGenerator = (metaList: ArticleMeta[]) => {
    const categoryTable: CategoryTable[] = [];
    metaList.map(metaData => {
        const { category: category } = metaData;
        category.forEach(categoryName => {
            if (!categoryTable.map(category => category.categoryName).includes(categoryName)) {
                categoryTable.push({
                    categoryName: categoryName,
                    kebabCase: kebabCase(categoryName)
                })
            }
        })
    })

    return categoryTable;
}

export const categoryList = categoryListGenerator(meta);