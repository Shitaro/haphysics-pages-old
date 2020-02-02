// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./category-list.json";

type Category = {
    id: string,
    name: string,
};

type CategoryList = Category[];

const categoryList: CategoryList = data;

export default categoryList;