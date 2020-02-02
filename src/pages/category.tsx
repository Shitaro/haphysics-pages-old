// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import categoryList from "../assets/category-list.json";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemLink from "../components/atoms/ListItemLink";

const CategoryPage: NextPage = () => {
    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Category List
            </Typography>
            <List>
                {categoryList.map(category => (
                    <ListItemLink href="/category/[category]" as={`/category/${category.id}`}>
                        <ListItemText primary={category.name} />
                    </ListItemLink>
                ))}
            </List>
        </Container>
    )
}

export default CategoryPage;