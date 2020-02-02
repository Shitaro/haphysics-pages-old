// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core";
import ButtonLink from "./atoms/ButtonLink";
import categoryList from "../assets/category-list.json";

const useStyles = makeStyles(
  createStyles({
    card: {
      height: "100%",
    },
    media: {
      paddingTop: "56.25%" // aspect 16:9
    },
  })
);

type Props = {
  id: string,
  thumbnail: string,
  title: string,
  categoryList: string[],
  description: string,
}

const MediaCard: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link href={`/articles/${props.id}`} passHref>
        <CardActionArea component="a">
          <CardMedia
            className={classes.media}
            image={props.thumbnail}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="h2" variant="h5" gutterBottom>
              {props.title}
            </Typography>
            <Typography component="p" variant="body2" color="textSecondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {props.categoryList.map(category => {
          const categoryId: string = categoryList.find(e => e.name === category)!.id;
          return (
            <ButtonLink
              href="/category/[category]"
              as={`/category/${categoryId}`}
              color="primary"
              size="medium">
              {category}
            </ButtonLink>
          )
        })}
      </CardActions>
    </Card>
  )
}

export default MediaCard;