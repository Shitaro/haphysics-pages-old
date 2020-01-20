// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import data from "../components/article-list.json"

interface Article {
  article: string,
  title: string,
  description: string,
  thumbnail: string,
  categoryList: string[],
  postDate: number,
  lastUpdateDate?: number
}

function getArticleList(articles: string[]): Article[] {
  return articles.map(articleName => {
    const { meta } = require(`../pages/articles/${articleName}.mdx`);
    const article: Article = {
      article: articleName,
      title: meta.title,
      description: meta.description,
      thumbnail: meta.thumbnail,
      categoryList: meta.category,
      postDate: new Date(meta.postDate).getTime(),
      lastUpdateDate: new Date(meta.lastUpdateDate).getTime()
    };

    return article;
  })
}

export default getArticleList(data["article"]);