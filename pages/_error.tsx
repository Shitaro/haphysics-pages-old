// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { type } from "os";

type Props = {
    title: string
    errorCode: number
}

class Error extends React.Component<Props> {
    static async getInitialProps({ res }: NextPageContext): Promise<Props> {
        return {
            title: `Error: ${res!.statusCode}`,
            errorCode: res!.statusCode
        };
    }

    render() {
        return (
            <>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                {this.props.errorCode}
            </>
        );
    }
}

export default Error;