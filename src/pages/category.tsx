// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { articleList } from "../assets/articleList";
import Link from "next/link";

function kebabCase(str:string): string {
    return str.split(/[_\s]/g).map(match => match.toLowerCase()).join("-");
}

const CategoryPage: NextPage = () => {
    let categories: string[] = [];
    articleList.forEach(article => article.categoryList.forEach((c: string) => categories.push(c)))
    categories = Array.from(new Set(categories.sort()))

    console.log(kebabCase("Hello World"))
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
                <Link href="/category/[category]" as={`/category/${kebabCase("Hello world")}`}>
                    <a>Go to Hello Category</a>
                </Link>
            </Container>
        </>
    )
}

export default CategoryPage;