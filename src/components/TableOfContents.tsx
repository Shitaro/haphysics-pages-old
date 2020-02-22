// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

type HeadingList = {
    type: string;
    title: string;
}[];

type HeadingMetaNode = {
    type: string;
    title: string;
    children?: HeadingMetaNode[];
}

type ContentsListProps = {
    contents: HeadingMetaNode[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.up("lg")]: {
                marginTop: theme.spacing(2),
                position: "fixed",
            },
            paddingBottom: theme.spacing(2),
        },
        title: {
            ...theme.typography.h2,
            [theme.breakpoints.up("lg")]: {
                ...theme.typography.h4,
            },
        },
        section: {
        },
        subsection: {
            paddingLeft: theme.spacing(4),
        },
        subsubsection: {
            paddingLeft: theme.spacing(8),
        }
    })
);

function getHeadingList(mdxElemArray: JSX.Element[]): HeadingList {
    const target = ["h2", "h3", "h4"];
    return mdxElemArray.filter(item => target.includes(item.props.mdxType)).map(item => ({
        type: item.props.mdxType,
        title: item.props.children,
    }));
}

export function createHeadingMetaList(headingList: HeadingList): HeadingMetaNode[] {
    let roots: number[] = [0];
    let parents: number[] = [0]; // parent of index
    let children: number[][] = new Array(headingList.length).fill([]).map(() => []); // initialize 2-D array with []

    function getChildrenIndex(index: number, firstElemIndex: number) {
        const secondElemIndex = index + 1;
        // base case
        if (secondElemIndex === headingList.length) {
            return;
        }

        const firstElemDepth = headingList[firstElemIndex].type;
        const secondElemDepth = headingList[secondElemIndex].type;

        if (firstElemDepth === "h2" && secondElemDepth === "h2") {
            roots.push(secondElemIndex);
            parents[secondElemIndex] = secondElemIndex;
            getChildrenIndex(secondElemIndex, secondElemIndex);
        } else if (firstElemDepth > secondElemDepth) {
            getChildrenIndex(index, parents[firstElemIndex]);
        } else if (firstElemDepth < secondElemDepth) {
            parents[secondElemIndex] = firstElemIndex;
            children[firstElemIndex].push(secondElemIndex);
            getChildrenIndex(secondElemIndex, secondElemIndex);
        } else {
            parents[secondElemIndex] = parents[firstElemIndex];
            children[parents[secondElemIndex]].push(secondElemIndex);
            getChildrenIndex(secondElemIndex, secondElemIndex);
        }
        return;
    }

    getChildrenIndex(0, 0);

    function createHeadingNode(index: number): HeadingMetaNode {
        // base case
        if (typeof children[index] === undefined) {
            return {
                type: headingList[index].type,
                title: headingList[index].title,
                children: []
            }
        }

        return {
            type: headingList[index].type,
            title: headingList[index].title,
            children: [...children[index].map(createHeadingNode)]
        }
    }

    return roots.map(createHeadingNode);
}

const ContentsList: React.FC<ContentsListProps> = ({contents}) => (
    <>
        {contents.map(content => {
            const classes = useStyles();
            let padding = classes.section;
            if (content.type === "h3") {
                padding = classes.subsection;
            } else if (content.type === "h4") {
                padding = classes.subsubsection;
            }
            return (
                <>
                    <MuiLink display="block" component="a" href={`#${content.title}`} key={content.title} color="textPrimary">
                        <Typography variant="body1" className={padding} color="textSecondary" gutterBottom>
                            {content.title}
                        </Typography>
                    </MuiLink>
                    {content.children !== undefined ? (
                        <ContentsList contents={content.children} />
                    ) : null}
                </>
            )
        })}
    </>
)

type Props = {
    contents: JSX.Element[];
}

const TableOfContents: React.FC<Props> = props => {
    const headingList = getHeadingList(props.contents);
    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <Typography component="h2" className={classes.title} gutterBottom>
                目次
            </Typography>
            <ContentsList contents={createHeadingMetaList(headingList)} />
        </nav>
    )
}

export default TableOfContents;