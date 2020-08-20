import React, { ReactElement } from "react";
import unified from "unified";
import markdown from "remark-parse";
import slug from "remark-slug";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";

const getArticleContent = (content: string): ReactElement => {
    const processor = unified()
        .use(markdown)
        .use(slug)
        .use(remark2rehype)
        .use(rehype2react, { createElement: React.createElement });

    return <>{processor.processSync(content).result}</>;
};

export default getArticleContent;
