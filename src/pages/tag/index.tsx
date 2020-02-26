// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import tagList from "../../assets/tagList";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemLink from "../../components/atoms/ListItemLink";

const TagPage: NextPage = () => {
    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Tag List
            </Typography>
            <List>
                {tagList.map(tag => (
                    <ListItemLink href="/tag/[tag]" as={`/tag/${tag.id}`} key={tag.id}>
                        <ListItemText primary={tag.ja} />
                    </ListItemLink>
                ))}
            </List>
        </Container>
    )
}

export default TagPage;