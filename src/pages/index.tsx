// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import MediaCard from "../components/MediaCard";
import articleMetaList from "../utils/ArticleMetaList";

const IndexPage: NextPage = () => {
  articleMetaList.sort((a,b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    return (
      a[keyA].title < b[keyB].title ? 1 : -1
    )
  });

  return (
    <>
      <Head>
        <title>幸福の物理 - Haphysics</title>
      </Head>
      <h1>Article List</h1>
      {articleMetaList.map(articleMeta => {
        const article = Object.keys(articleMeta)[0];
        return (
          <MediaCard
            article={article}
            title={articleMeta[article].title}
            thumbnail={articleMeta[article].thumbnail}
            description={articleMeta[article].description}
            categoryList={articleMeta[article].categoryList}
          />
        )
      })}
    </>
  )
};

export default IndexPage;