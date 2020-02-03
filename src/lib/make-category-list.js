// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function kebabCase(str){
    return str.split(/[_\s]/g).map(match => match.toLowerCase()).join("-");
}

const makeCategoryList = articleMetaList => {
    const categoryList = [... new Set(articleMetaList.map(meta => meta.category).reduce((acc, val) => acc.concat(val), []))]
    return categoryList.map(category => (
        {
            id: kebabCase(category),
            name: category
        }
    ));
}

module.exports = makeCategoryList;