// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useRouter, NextRouter } from "next/router";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import categoryList, { findCategoryById } from "../../assets/categoryList";
import articleMetaList, { ArticleMeta } from "../../assets/articleMetaList";
import MediaCard, { ButtonLinkProps } from "../../components/MediaCard";

const getCategoryName = (categoryId: string) => categoryList.find(category => category.id === categoryId)?.ja || "";

const getArticleList = (categoryId: string) => (
    articleMetaList.filter(article => article.category.includes(categoryId))
)

const getSlugFromRouter = (router: NextRouter): string => {
    const value = router.query.category;
    if (value === undefined) {
        return "";
    } else if (Array.isArray(value)) {
        throw new TypeError("The query has more than two url slugs!");
    }
    return value;
}

const getCategoryButtonList = (article: ArticleMeta) :ButtonLinkProps[] => (
  article.category.map(category => {
    const matchCategory = findCategoryById(category)!;

    return {
      name: matchCategory.ja,
      href: "/category/[category]",
      as: `/category/${matchCategory.id}`
    }
  })
)

const Page: NextPage = () => {
    const router = useRouter();
    const categoryId = getSlugFromRouter(router);

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Category: {getCategoryName(categoryId)}
            </Typography>
            <Grid container spacing={4}>
                {getArticleList(categoryId)
                    .sort((a,b) => a.postDate < b.postDate ? 1 : -1 )
                    .map(article => {
                const categoryButtonList = getCategoryButtonList(article);
                return (
                    <Grid item xs={12} sm={6}>
                        <MediaCard
                            title={article.title}
                            href={`/articles/${article.id}`}
                            image={article.thumbnail}
                            description={article.description}
                            buttons={categoryButtonList}
                        />
                    </Grid>
                )
            })}
            </Grid>
        </Container>
    )
}

export default Page;