import data from "../components/article-list.json"

interface Meta {
  title: string,
  description: string,
  thumbnail: string,
  categoryList: string[],
  postDate: number,
  lastUpdateDate?: number
}

interface ArticleMeta {
  [article: string]: Meta
}

function getArticleMetaList(articles:string[]): ArticleMeta[] {
  return articles.map(article => {
    const { meta } = require(`../pages/articles/${article}.mdx`);

    const articleMeta: ArticleMeta = {};
    articleMeta[article] = {
      title: meta.title,
      description: meta.description,
      thumbnail: meta.thumbnail,
      categoryList: meta.category,
      postDate: new Date(meta.postDate).getTime(),
      lastUpdateDate: new Date(meta.lastUpdateDate).getTime()
    }

    return articleMeta;
  })
}

export default getArticleMetaList(data["article"]);