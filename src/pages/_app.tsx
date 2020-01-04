// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import App from "next/app";
// Material-UI
// "be used at the root of your component tree"
// https://material-ui.com/styles/api/#themeprovider
import { ThemeProvider } from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";
import theme from "../assets/theme";

const components = {
    inlineCode: (props: any) => <code class="language-none" {...props}/>
}

export default class extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <MDXProvider components={components}>
                    <Component {...pageProps} />
                </MDXProvider>
            </ThemeProvider>
        );
    }
}