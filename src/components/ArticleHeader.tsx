// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Meta from "next/head";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ButtonLink from "@components/atoms/ButtonLink";
import { findCategoryById } from "@assets/categoryList";
import { findTagById } from "@assets/tagList";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(4)
    },
    button: {
        margin: theme.spacing(1),
    },
    heading: {
        fontWeight: 500,
    },
  })
);

export type ArticleHeaderProps = {
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    postDate: string,
    lastUpdateDate?: string,
    category: string[],
    tag: string[],
}

const ArticleHeader: React.FC<ArticleHeaderProps> = props => {
    const classes = useStyles();
    return (
        <>
            <Meta>
                <title key="title">{props.title} - Haphysics</title>
                <meta property="og:url" content={`https://haphysics.com/articles/${props.id}`} />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={props.thumbnail} />
                <meta property="og:site_name" content="幸福の物理 - Haphysics" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@shitaro2016" />
            </Meta>
            <div className={classes.root}>
                <Typography component="h1" variant="h1" gutterBottom>
                    {props.title}
                </Typography>
                <Typography component="div" variant="subtitle1" color="textSecondary">
                    投稿日時: {getDate(props.postDate)}
                </Typography>
                <LastUpdateDate lastUpdateDate={props.lastUpdateDate} />
                <Typography component="h2" variant="h4" className={classes.heading}>
                    Category
                </Typography>
                {props.category.map(categoryId => {
                    return <CategoryButton categoryId={categoryId} />
                })}
                <Typography component="h2" variant="h4" className={classes.heading}>
                    Tag
                </Typography>
                {props.tag.map(tagId => {
                    return <TagButton tagId={tagId} />
                })}
                <Divider />
            </div>
        </>
    )
}

const CategoryButton: React.FC<{categoryId: string}> = ({categoryId}) => {
    const name = findCategoryById(categoryId)!.ja;
    const classes = useStyles();
    return (
        <ButtonLink
            href="/category/[category]"
            as={`/category/${categoryId}`}
            variant="outlined"
            color="primary"
            className={classes.button}
        >
            {name}
        </ButtonLink>
    )
}

const TagButton: React.FC<{tagId: string}> = ({tagId}) => {
    const name = findTagById(tagId)!.ja;
    const classes = useStyles();
    return (
        <ButtonLink
            href="/tag/[tag]"
            as={`/tag/${tagId}`}
            variant="outlined"
            color="inherit"
            className={classes.button}
        >
            {name}
        </ButtonLink>
    )
}

const getDate = (unixtime: string) => {
    const dateObj = new Date(unixtime);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1 < 10 ? "0" : "") + (dateObj.getMonth() + 1);
    const day = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();

    return [year, month, day].join("-");
}

const LastUpdateDate: React.FC<{lastUpdateDate: string | undefined}> = ({lastUpdateDate}) => {
    if (lastUpdateDate === undefined) {
        return <></>
    }
    return (
        <>
            <Typography component="div" variant="subtitle1" color="textSecondary" gutterBottom>
                更新日時: {getDate(lastUpdateDate)}
            </Typography>
        </>
    )
}

export default ArticleHeader;