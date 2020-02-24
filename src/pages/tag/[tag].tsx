// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useRouter, NextRouter } from "next/router";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import tagList, { findTagById } from "../../assets/tagList";
import articleMetaList, { ArticleMeta } from "../../assets/articleMetaList";
import MediaCard, { ButtonLinkProps } from "../../components/MediaCard";

const getTagName = (tagId: string) => tagList.find(tag => tag.id === tagId)?.ja || "";

const getArticleList = (tagId: string) => (
    articleMetaList.filter(article => article.tag.includes(tagId))
)

const getSlugFromRouter = (router: NextRouter): string => {
    const value = router.query.tag;
    if (value === undefined) {
        return "";
    } else if (Array.isArray(value)) {
        throw new TypeError("The query has more than two url slugs!");
    }
    return value;
}

const getTagButtonList = (article: ArticleMeta) :ButtonLinkProps[] => (
  article.tag.map(tag => {
    const matchTag = findTagById(tag)!;

    return {
      name: matchTag.ja,
      href: "/tag/[tag]",
      as: `/tag/${matchTag.id}`
    }
  })
)

const Page: NextPage = () => {
    const router = useRouter();
    const tagId = getSlugFromRouter(router);

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Tag: {getTagName(tagId)}
            </Typography>
            <Grid container spacing={4}>
                {getArticleList(tagId).map(article => {
                const tagButtonList = getTagButtonList(article);
                return (
                    <Grid item xs={12} sm={6}>
                        <MediaCard
                            title={article.title}
                            href={`/articles/${article.id}`}
                            image={article.thumbnail}
                            description={article.description}
                            buttons={tagButtonList}
                        />
                    </Grid>
                )
            })}
            </Grid>
        </Container>
    )
}

export default Page;