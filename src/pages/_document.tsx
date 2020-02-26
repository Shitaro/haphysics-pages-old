// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/core/styles";
import DefaultLayout from "@layouts/Layout";

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        // styled-components
        // https://www.styled-components.com/docs/advanced#server-side-rendering
        const styledComponentsSheet = new ServerStyleSheet();

        // Material UI
        // a class helper to handle server-side rendering
        // https://material-ui.com/styles/api/#serverstylesheets
        const materialUiSheet = new ServerStyleSheets();

        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App: any) => (props: any) =>
                styledComponentsSheet.collectStyles(
                    materialUiSheet.collect(
                        <App { ...props } />
                    )
                )
        });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [...(initialProps.styles as any), ...styledComponentsSheet.getStyleElement(), materialUiSheet.getStyleElement()]
        };
    }

    render() {
        return <DefaultLayout />
    }
}