// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { Head, Main, NextScript } from "next/document";

export default () => (
    <html>
        <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
                integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
                crossOrigin="anonymous"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </html>
);