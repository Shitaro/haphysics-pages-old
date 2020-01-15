// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import App from "next/app";
import Head from "next/head";
// # Material-UI
// ## ThemeProvider
// "be used at the root of your component tree"
// https://material-ui.com/styles/api/#themeprovider
import { ThemeProvider } from "@material-ui/core/styles";
// ## CssBaseline
// "kickstart an elegant, consistent, and simple baseline to build upon"
// https://material-ui.com/components/css-baseline/
import CssBaseline from "@material-ui/core/CssBaseline";

import { MDXProvider } from "@mdx-js/react";
import theme from "../assets/theme";

import HeaderNavigation from "../components/HeaderNavigation";
import BottomNavigation from "../components/BottomNavigation";

const components = {
    inlineCode: (props: any) => <code class="language-none" {...props}/>
}

export default class extends App {
    componentDidMount() {
        // Remove the server-side injected CSS
        // https://material-ui.com/guides/server-rendering/#the-client-side
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                {/* Material-UI
                    "To ensure proper rendering and touch zooming for all devices"
                    https://material-ui.com/getting-started/usage/#responsive-meta-tag 
                */}
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                </Head>
                <ThemeProvider theme={theme}>
                    <MDXProvider components={components}>
                        <CssBaseline />
                        <HeaderNavigation />
                        <Component {...pageProps} />
                        <BottomNavigation />
                    </MDXProvider>
                </ThemeProvider>
            </>
        );
    }
}