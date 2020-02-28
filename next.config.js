// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// How to configure to use MDX in Next.js
// https://mdxjs.com/getting-started/next

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const rehypePrism = require("@mapbox/rehype-prism");
const exportPathMap = require("./src/modules/export-path-map");

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism]
    }
});

const withAbsoluteImports = require("./src/modules/with-abusolute-imports")({
    baseDir: __dirname,
    aliases: [
        {path: "src", alias: "@"},
        {path: "src/assets", alias: "@assets"},
        {path: "src/components", alias: "@components"},
        {path: "src/layouts", alias: "@layouts"},
    ],
});

module.exports = 
    withAbsoluteImports(
        withMDX({
            pageExtensions: ["mdx", "tsx"],
            exportPathMap
        })
    );