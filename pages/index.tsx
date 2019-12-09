// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import StyledComponent from "../components/index";

type Props = {
    title: string
}

class App extends React.Component<Props> {
    static async getInitialProps(): Promise<Props> {
        return { title: "Hello, world!" };
    }

    render() {
        return (
            <>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                <StyledComponent />
                <Link href="./article">
                    <a>Go to Article</a>
                </Link>
            </>
        );
    }
}

export default App;