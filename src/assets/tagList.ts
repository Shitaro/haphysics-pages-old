// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "./tag-list.json";

type Tag = {
    readonly id: string,
    readonly ja: string,
    readonly en: string,
};

const tagList: Tag[] = data;

export const findTagById = (tagId: string) => tagList.find(({id}) => id === tagId);

export default tagList;