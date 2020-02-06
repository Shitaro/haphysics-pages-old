// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"
import MediaCard, { ButtonLinkProps } from "../components/MediaCard";
import articleMetaList, { ArticleMeta } from "../assets/articleMetaList";
import { findCategoryById } from "../assets/categoryList";
import ButtonLink from "../components/atoms/ButtonLink";

const getCategoryButtonList = (article: ArticleMeta) :ButtonLinkProps[] => (
  article.category.map(category => {
    const categoryObj = findCategoryById(category)!;

    return {
      name: categoryObj.ja,
      href: "/category/[category]",
      as: `/category/${categoryObj.id}`
    }
  })
)

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(12,0,8)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}))

const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Haphysics
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          ようこそ、幸福の物理へ。得た知識をここにまとめる予定です。
          This website is now under construction...
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <ButtonLink variant="outlined" color="primary" href="https://github.com/Shitaro/haphysics-pages">
                GitHub
              </ButtonLink>
            </Grid>
            <Grid item>
              <ButtonLink variant="outlined" color="primary" href="https://shitaro-happy-physics.hatenablog.jp">
                Blog
              </ButtonLink>
            </Grid>
            <Grid item>
              <ButtonLink variant="outlined" color="primary" href="https://twitter.com/shitaro2016">
                Twitter
              </ButtonLink>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

const IndexPage: NextPage = () => {
  articleMetaList.sort((a,b) => a.postDate < b.postDate ? 1 : -1 );

  return (
    <>
      <Head>
        <title>幸福の物理 - Haphysics</title>
      </Head>
      <Container maxWidth="md">
        <Hero />
        <Typography component="h2" variant="h2" gutterBottom>
          Article List
        </Typography>
        <Grid container spacing={4}>
          {articleMetaList.map(article => {
            const categoryButtonList = getCategoryButtonList(article);
            return (
              <Grid item xs={12} sm={6}>
                <MediaCard
                  title={article.title}
                  href={`/articles/${article.id}`}
                  image={article.thumbnail}
                  description={article.description}
                  buttons={categoryButtonList}
                />
              </Grid>
            )}
          )}
        </Grid>
      </Container>
    </>
  )
};

export default IndexPage;