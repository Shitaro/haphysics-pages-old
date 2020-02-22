// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import ArticleHeader, { ArticleHeaderProps } from "../components/ArticleHeader";
import TableOfContents, { createHeadingMetaList } from "../components/TableOfContents";
import Container from "@material-ui/core/Container";

const ArticleLayout: React.FC = (props:any) => {
    const meta: ArticleHeaderProps = props.meta;
    const children: JSX.Element[] = props.children;

    return (
        <Container maxWidth="md">
            <ArticleHeader {...meta} />
            <TableOfContents contents={createHeadingMetaList(children)} />
            <main {...props} />
        </Container>
    )
}

export default ArticleLayout;