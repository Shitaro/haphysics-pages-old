// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// How to configure to use MDX in Next.js
// https://mdxjs.com/getting-started/next

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const rehypePrism = require("@mapbox/rehype-prism");
const exportPathMap = require("./src/lib/export-path-map");

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism]
    }
});

module.exports = withMDX({
    pageExtensions: ["mdx", "tsx"],
    exportPathMap
});