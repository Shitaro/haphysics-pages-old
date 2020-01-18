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
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core";

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
  article: string,
  thumbnail: string,
  title: string,
  categoryList: string[],
  description: string,
}

const MediaCard: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link href={`/articles/${props.article}`} as={`/post/${props.article}`} passHref>
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
        {props.categoryList.map(category => (
          <Button color="primary" size="small">
            {category}
          </Button>
        ))}
      </CardActions>
    </Card>
  )
}

export default MediaCard;