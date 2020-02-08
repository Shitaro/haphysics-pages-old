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

const getStringFromRouter = (router: NextRouter): string => {
    let id: string = "";
    if (typeof router.query.category == "string") {
        id = router.query.category;
    } else {
        id = "";
    }
    return id;
}

const getCategoryButtonList = (article: ArticleMeta) :ButtonLinkProps[] => (
  article.category.map(category => {
    const categoryObj = findCategoryById(category)!;

    return {
      name: categoryObj.ja,
      href: "/category/[category]",
      as: `/category/${categoryObj.id}`
    }
  })
)

const Page: NextPage = () => {
    const router = useRouter();
    const categoryId = getStringFromRouter(router);

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Category: {getCategoryName(categoryId)}
            </Typography>
            <Grid container spacing={4}>
                {getArticleList(categoryId).map(article => {
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