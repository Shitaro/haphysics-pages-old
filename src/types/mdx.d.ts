// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

type ArticleMeta = {
  name: string,
  title: string,
  description: string,
  thumbnail: string,
  category: string[],
  postDate: string
}

// This module is:
// Copyright (c) Compositor and Zeit, Inc.
// Released under the MIT license in mdx, https://mdxjs.com/advanced/typescript
// See https://opensource.org/licenses/MIT
declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'thematicBreak'
    | 'blockquote'
    | 'ul'
    | 'ol'
    | 'li'
    | 'table'
    | 'tr'
    | 'td'
    | 'pre'
    | 'code'
    | 'em'
    | 'strong'
    | 'delete'
    | 'inlineCode'
    | 'hr'
    | 'a'
    | 'img'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>
  }
  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

// This module is:
// Copyright (c) Compositor and Zeit, Inc.
// Released under the MIT license in mdx, https://mdxjs.com/advanced/typescript
// See https://opensource.org/licenses/MIT
declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element
    export default MDXComponent
}