// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MediaCard from "../components/MediaCard";
import { articleList } from "./articles/_articleList";

const IndexPage: NextPage = () => {
  articleList.sort((a,b) => a.postDate < b.postDate ? 1 : -1 );
  return (
    <>
      <Head>
        <title>幸福の物理 - Haphysics</title>
      </Head>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" gutterBottom>
          Welcome to Haphysics!
        </Typography>
        <Typography component="body" variant="body1" gutterBottom>
          <p>ようこそ、幸福の物理へ。</p>
          <p>This website is under construction now...</p>
          <p>This website is generated by <Link href="https://github.com/Shitaro/haphysics-pages"><a>this source code</a></Link>!</p>
        </Typography>
        <Typography component="h2" variant="h2" gutterBottom>
          Article List
        </Typography>
        {articleList.map(article => (
          <>
            <MediaCard
              key={article.name}
              article={article.name}
              title={article.title}
              thumbnail={article.thumbnail}
              description={article.description}
              categoryList={article.categoryList}
            />
            <p />
          </>
        ))}
      </Container>
    </>
  )
};

export default IndexPage;