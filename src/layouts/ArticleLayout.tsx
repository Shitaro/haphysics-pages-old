// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Container from "@material-ui/core/Container";

const ArticleLayout: React.FC = props => (
    <>
        <Container maxWidth="md">
            {props.children}
        </Container>
    </>
)

export default ArticleLayout;