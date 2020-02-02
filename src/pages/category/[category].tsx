// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import articleMetaList from "../../assets/article-meta-list.json"
import categoryList from "../../assets/category-list.json";

const getArticleList = (id: string | string[]) => {
    const category = categoryList.find(category => category.id === id)?.name || "";
    return articleMetaList.filter(article => article.category.includes(category));
}

const Page: NextPage = () => {
    const router = useRouter();
    const category = router.query.category;

    return (
        <>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" gutterBottom>
                    Category: {category}
                </Typography>
                {getArticleList(category).map(article => {
                    return (
                        <>
                            <Link href="/articles/[article]" as={`/articles/${article.id}`}>
                                <a>Go to {article.title}</a>
                            </Link>
                            <br />
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default Page;