import React from "react";
import ArticleHeader, { ArticleHeaderProps } from "../components/ArticleHeader";
import TableOfContents, { SectionNode } from "../components/TableOfContents";
import Container from "@material-ui/core/Container";

const getSectionNode = (children: JSX.Element[]): SectionNode[] => {
    const target = ["h2", "h3", "h4"];
    const sections = children.filter(child => target.includes(child.props.mdxType));

    return (
        sections.map(section => {
            const result: SectionNode = {
                type: section.props.mdxType,
                text: section.props.children,
            };
            return result;
        })
    )
}

const ArticleLayout: React.FC = (props:any) => {
    const meta: ArticleHeaderProps = props.meta;
    const children: JSX.Element[] = props.children;

    return (
        <Container maxWidth="md">
            <ArticleHeader {...meta} />
            <TableOfContents sections={getSectionNode(children)} />
            <main {...props} />
        </Container>
    )
}

export default ArticleLayout;