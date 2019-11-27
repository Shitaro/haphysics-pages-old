// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import DefaultLayout from "../layouts/index";

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App: any) => (props: any) =>
                sheet.collectStyles(<App { ...props } />)
        });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
        };
    }

    render() {
        return <DefaultLayout />
    }
}