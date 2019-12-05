import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const ArticlePage : NextPage = () => (
    <div>
        <p>This is Article.</p>
        <Link href="./posts/hello">
            <a>Go to an article</a>
        </Link>
        <p/>
        <Link href="./index">
            <a>Go to Home</a>
        </Link>
    </div>
);

export default ArticlePage;