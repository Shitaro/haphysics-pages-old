import React, { ReactElement } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
    query getPosts {
        articles {
            id
            title
            content
        }
    }
`;

const Page = (): ReactElement => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <>
                <h1>Error!</h1>${error.message}
            </>
        );
    }

    return (
        <>
            <h1>QraphQL Query Fetch!</h1>
            {data.articles.map((article) => (
                <>
                    <h2 key={article.id}>{article.title}</h2>
                    {article.content}
                </>
            ))}
            <br />
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </>
    );
};

export default Page;
