import { meta as helloMeta } from "./hello.mdx"
import { meta as bonjourMeta } from "./bonjour.mdx"

const metaDateConverter = (metaData: ArticleMeta) => {
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

export const articleList = [
    helloMeta,
    bonjourMeta
].map(metaDateConverter)