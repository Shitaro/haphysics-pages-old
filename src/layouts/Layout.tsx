// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from '../assets/theme';

export default () => (
    <Html lang="ja">
        <Head>
            <meta charSet="utf-8" />
            {/* PWA primary color */}
            <meta name="theme-color" content={theme.palette.primary.main} />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            {/* KaTeX */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
                integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
                crossOrigin="anonymous"
            />
            {/* for syntax highlight */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.min.css"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);