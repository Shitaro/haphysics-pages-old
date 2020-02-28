// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import ArticleHeader, { ArticleHeaderProps } from "../components/ArticleHeader";
import TableOfContents from "../components/TableOfContents";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toc: {
            paddingLeft: theme.spacing(8),
        }
    })
);

const ArticleLayout: React.FC = (props:any) => {
    const meta: ArticleHeaderProps = props.meta;
    const contents: JSX.Element[] = props.children;
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} lg={8}>
                    <ArticleHeader {...meta} />
                    <Hidden lgUp implementation="css">
                        <TableOfContents contents={contents} />
                    </Hidden>
                    <main {...props} />
                </Grid>
                <Hidden mdDown implementation="css">
                    <Grid item xs={12} lg={4}>
                        <div className={classes.toc}>
                            <TableOfContents contents={contents} />
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    )
}

export default ArticleLayout;