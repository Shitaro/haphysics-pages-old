// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { Head, Main, NextScript } from "next/document";
import theme from '../assets/theme';
import styled from "styled-components";
import { bottomNavHeight } from "../components/BottomNavigation";

// Fill body with blanks only for the height of two navigations
const Body: React.FC<{ className?: string }> = props => (
    <body className={props.className}>{props.children}</body>
)

const StyledBody = styled(Body)`
    padding-top: 64px;
    padding-bottom: ${bottomNavHeight}px;
`

export default () => (
    <html>
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
        <StyledBody>
            <Main />
            <NextScript />
        </StyledBody>
    </html>
);