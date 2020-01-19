// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPage } from "next";
// import Link from "next/link";
import Head from "next/head";
import MediaCard from "../components/MediaCard";
// import StyledComponent from "../components/index";

import articleMetaList from "../utils/ArticleMetaList";
// import data from "../components/article-list.json"

// const articleList = data["article"];


// const articleComponentList = () => {
//   const sortedArticleList = SortArticleByDate(MakePairOfPostDate(articleList));
//   console.log(sortedArticleList);
//   return (
//     sortedArticleList.map(article => {
//       console.log(article[0])
//       const { meta } = require(`../pages/articles/${article[0]}.mdx`);

//       return (
//         <>
//           <Link href={`/articles/${article[0]}`} as={`/post/${article[0]}`}>
//             <a>{meta.title}</a>
//           </Link>
//           <p>{meta.description}</p>
//         </>
//       )
//     })
//   )
// }

// const articleComponentList: JSX.Element[] = articleList.map(article => {
//   const { meta } = require(`../pages/articles/${article}.mdx`);

//   return (
//     <>
//       <Link href={`/articles/${article}`} as={`/post/${article}`}>
//         <a>{meta.title}</a>
//       </Link>
//       <p>{meta.description}</p>
//     </>
//   )
// })

const IndexPage: NextPage = () => {
  // var articleMetaList = getArticleMetaList(articleList);
  // console.log(articleMetaList[0]);
  // console.log(articleMetaList[1]);
  // const hoge = articleMetaList[0];
  // console.log(Object.keys(hoge)[0])
  // console.log(hoge["bonjour"].title)
  articleMetaList.sort((a,b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    return (
      a[keyA].title < b[keyB].title ? 1 : -1
    )
  });
  // console.log(articleMetaList[0]);
  // console.log(articleMetaList[1]);
  // const sortedArticleMetaList = articleMetaList.sort((a,b)=> a.postDate > b.postDate ? 1 : -1 );
  // console.log(sortedArticleMetaList[0]);
  // console.log(sortedArticleMetaList[1]);

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
      {/* {articleList.map(article => {
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
      })} */}
      {/* <StyledComponent />
      <h1>Article List</h1>
      {articleComponentList} */}
    </>
  )
};

export default IndexPage;