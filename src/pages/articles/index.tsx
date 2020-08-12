import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { gql } from "@apollo/client";
import createApolloClient from "../../lib/apolloClient";

const GET_ARTICLE_TITLE = gql`
    query getArticleTitle {
        articles {
            id
            slug
            title
        }
    }
`;

type Article = {
    id: string;
    slug: string;
    title: string;
};

type Props = {
    articles: Article[];
};

const Page = ({ articles }: Props): ReactElement => {
    return (
        <>
            <h1>Article List</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link href={`/articles/${article.slug}`}>
                            <a>{article.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <br />
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query<Props>({
        query: GET_ARTICLE_TITLE,
    });

    return {
        props: {
            articles: data.articles,
        },
    };
};

export default Page;
