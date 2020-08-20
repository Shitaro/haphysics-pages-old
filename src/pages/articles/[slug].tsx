import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { gql } from "@apollo/client";
import createApolloClient from "../../lib/apolloClient";
import getArticleContent from "../../lib/articles";

const GET_ARTICLE_ALL_SLUGS = gql`
    query getArticles {
        articles {
            slug
        }
    }
`;

const GET_ARTICLE_BY_SLUG = gql`
    query getArticlesBySlug($slug: String) {
        articles(where: { slug: $slug }) {
            title
            content
        }
    }
`;

type Article = {
    title: string;
    content: string;
};

type Props = {
    article: Article;
};

const Article = ({ article }: Props): ReactElement => {
    return (
        <>
            <p>TEST</p>
            <h1>{article.title}</h1>
            <br />
            {getArticleContent(article.content)}
            <br />
            <Link href="/articles">
                <a>Go to Article List</a>
            </Link>
            <br />
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query<{ articles: Article[] }>({
        query: GET_ARTICLE_BY_SLUG,
        variables: { slug: params.slug },
    });

    // Because it is assumed that slug is unique,
    // `data` has only one article object.
    const article = data.articles[0];

    return {
        props: {
            article,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query<{ articles: { slug: string }[] }>(
        {
            query: GET_ARTICLE_ALL_SLUGS,
        }
    );

    return {
        paths: data.articles.map((article) => ({
            params: {
                slug: article.slug,
            },
        })),
        fallback: false,
    };
};

export default Article;
