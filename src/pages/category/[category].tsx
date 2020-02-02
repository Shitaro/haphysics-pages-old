// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import categoryList from "../../assets/categoryList";
import articleMetaList, { ArticleMeta } from "../../assets/articleMetaList";
import MediaCard, { ButtonLinkProps } from "../../components/MediaCard";

const getCategoryName = (id: string | string[]) => categoryList.find(category => category.id === id)?.name || "";

const getArticleList = (id: string | string[]) => {
    const category = getCategoryName(id);
    return articleMetaList.filter(article => article.category.includes(category));
}

const getCategoryButtonList = (article: ArticleMeta) => {
    const categoryButtonList: ButtonLinkProps[] = article.category.map(category => {
      const categoryId = categoryList.find(c => c.name === category)!.id;

      return {
        name: category,
        href: "/category/[category]",
        as: `/category/${categoryId}`
      }
    })
    return categoryButtonList;
}

const Page: NextPage = () => {
    const router = useRouter();
    const category = router.query.category;

    return (
        <>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" gutterBottom>
                    Category: {getCategoryName(category)}
                </Typography>
                {getArticleList(category).map(article => {
                    const categoryButtonList = getCategoryButtonList(article);
                    return (
                        <>
                            <MediaCard
                                title={article.title}
                                href={`/articles/${article.id}`}
                                image={article.thumbnail}
                                description={article.description}
                                buttons={categoryButtonList}
                            />
                            <br />
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default Page;