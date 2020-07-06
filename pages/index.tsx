import React, { ReactElement } from "react";
import Link from "next/link";

const IndexPage = (): ReactElement => (
    <>
        <h1>Index Page</h1>
        <p>Welcome to Index Page!</p>
        <Link href="/about">
            <a>Go to About</a>
        </Link>
    </>
);

export default IndexPage;
