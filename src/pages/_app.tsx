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
import theme from "../theme";

export default class extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}