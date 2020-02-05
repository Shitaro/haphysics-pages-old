// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./category-map-list.json";

export type CategoryMap = {
    articleId: string,
    categoryId: string
};

export type CategoryMapList = CategoryMap[];

const categoryMapList: CategoryMapList = data;

export default categoryMapList;