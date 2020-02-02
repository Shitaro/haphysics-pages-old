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

const getCategoryName = (id: string | string[]) => categoryList.find(category => category.id === id)?.name || "";

const getArticleList = (id: string | string[]) => {
    const category = getCategoryName(id);
    return articleMetaList.filter(article => article.category.includes(category));
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
                    return (
                        <>
                            <Link href={`/articles/${article.id}`} >
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