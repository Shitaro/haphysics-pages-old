import React, { ReactElement } from "react";
import Link from "next/link";

const AboutPage = (): ReactElement => (
    <>
        <h1>About Page</h1>
        <p>Welcome to Index Page!</p>
        <Link href="/">
            <a>Go to Home</a>
        </Link>
    </>
);

export default AboutPage;
