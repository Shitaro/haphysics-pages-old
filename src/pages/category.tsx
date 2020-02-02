// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import categoryList from "../assets/category-list.json";

const CategoryPage: NextPage = () => {
    return (
        <>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" gutterBottom>
                    Category List
                </Typography>
                {categoryList.map(category => {
                    return (
                        <>
                            <Link href="/category/[category]" as={`/category/${category.id}`}>
                                <a>{category.name}</a>
                            </Link>
                            <p />
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default CategoryPage;