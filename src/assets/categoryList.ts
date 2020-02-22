// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./category-list.json";

type Category = {
    readonly id: string,
    readonly ja: string,
    readonly en: string,
};

const categoryList: Category[] = data;

export const findCategoryById = (categoryId: string) => categoryList.find(({id}) => id === categoryId);

export default categoryList;