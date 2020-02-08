// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./category-list.json";

type Category = {
    id: string,
    ja: string,
    en: string,
};

type CategoryList = Category[];

const categoryList: CategoryList = data;

export const findCategoryById = (categoryId: string) => categoryList.find(({id}) => id === categoryId);

export default categoryList;