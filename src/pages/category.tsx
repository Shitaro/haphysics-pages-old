// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import articleList from "../components/article-list.json";

const CategoryPage: NextPage = () => {
    let categories: string[] = [];
    articleList.forEach(article => article.categoryList.forEach(c => categories.push(c)))
    categories = Array.from(new Set(categories.sort()))

    return (
        <>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" gutterBottom>
                    Category
                    {categories.map(category => (
                        <Typography component="h2" variant="h4" gutterBottom>
                            {category}
                        </Typography>
                    ))}
                </Typography>
            </Container>
        </>
    )
}

export default CategoryPage;