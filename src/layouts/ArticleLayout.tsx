// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import ArticleHeader, { ArticleHeaderProps } from "../components/ArticleHeader";
import TableOfContents from "../components/TableOfContents";
import Container from "@material-ui/core/Container";

const ArticleLayout: React.FC = (props:any) => {
    const meta: ArticleHeaderProps = props.meta;
    const contents: JSX.Element[] = props.children;

    return (
        <Container maxWidth="md">
            <ArticleHeader {...meta} />
            <TableOfContents contents={contents} />
            <main {...props} />
        </Container>
    )
}

export default ArticleLayout;