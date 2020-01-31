// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ArticleLayout from "../../layouts/ArticleLayout";

const Page: NextPage = () => {
    const router = useRouter();
    const MDXComponent = dynamic(import(`../../contents/${router.query.article}.mdx`));

    return (
        <ArticleLayout>
            <MDXComponent />
        </ArticleLayout>
    );
}

export default Page;