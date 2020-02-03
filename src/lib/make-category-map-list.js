// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const makeCategoryMapList = articleMetaList => (
    articleMetaList.map(({id, category}) => (
        category.map(categoryId => (
            {
                articleId: id,
                categoryId: categoryId
            }
        ))
    ))
    // .flat()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    .reduce((acc, val) => acc.concat(val), [])
)

module.exports = makeCategoryMapList;