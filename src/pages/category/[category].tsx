// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useRouter } from "next/router";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import categoryList from "../../assets/categoryList";
import articleMetaList from "../../assets/articleMetaList";
import categoryMapList from "../../assets/categoryMapList";
import MediaCard, { ButtonLinkProps } from "../../components/MediaCard";

const getCategoryName = (id: string | string[]) => categoryList.find(category => category.id === id)?.ja || "";

const getArticleList = (categoryId: string | string[]) => (
    categoryMapList.filter(categoryMap => categoryMap.categoryId === categoryId)
                   .map(({articleId}) => articleMetaList.find(article => article.id === articleId)!)
)

const getCategoryButtonList = (articleId: string) :ButtonLinkProps[] => (
  categoryMapList.filter(props => props.articleId === articleId).map(({categoryId}) => {
    const category = categoryList.find(({id}) => id === categoryId)!;

    return {
      name: category.ja,
      href: "/category/[category]",
      as: `/category/${category.id}`
    }
  })
)

const Page: NextPage = () => {
    const router = useRouter();
    const categoryId = router.query.category;

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Category: {getCategoryName(categoryId)}
            </Typography>
            <Grid container spacing={4}>
                {getArticleList(categoryId).map(article => {
                const categoryButtonList = getCategoryButtonList(article.id);
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