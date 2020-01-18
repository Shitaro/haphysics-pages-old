// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import MediaCard from "../components/MediaCard";
import StyledComponent from "../components/index";

import data from "../components/article-list.json"

const articleList = data["article"];

const articleComponentList: JSX.Element[] = articleList.map(article => {
  const { meta } = require(`../pages/articles/${article}.mdx`);

  return (
    <>
      <Link href={`/articles/${article}`} as={`/post/${article}`}>
        <a>{meta.title}</a>
      </Link>
      <p>{meta.description}</p>
    </>
  )
})

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>幸福の物理 - Haphysics</title>
    </Head>
    {articleList.map(article => {
      const { meta } = require(`../pages/articles/${article}.mdx`);
      return (
        <>
          <MediaCard
            article={article}
            title={meta.title}
            thumbnail={meta.thumbnail}
            description={meta.description}
            categoryList={meta.category}
          />
        </>
      )
    })}
    <StyledComponent />
    <h1>Article List</h1>
    {articleComponentList}
  </>
);

export default IndexPage;