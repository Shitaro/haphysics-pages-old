// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { LinkProps } from "next/link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core";
import ButtonLink from "./atoms/ButtonLink";
import categoryList from "../assets/category-list.json";
import CardActionAreaLink from "./atoms/CardActionAreaLink";

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

export type ButtonLinkProps = {
  name: string,
  href: string,
  as?: string,
}

type MediaCardProps = {
  title: string,
  description?: string,
  image?: string,
  buttons: ButtonLinkProps[]
} & Pick<LinkProps, "href" | "as">;

const MediaCard: React.FC<MediaCardProps> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionAreaLink href={props.href} as={props.as}>
          <CardMedia
            className={classes.media}
            image={props.image}
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
      </CardActionAreaLink>
      <CardActions>
        {props.buttons.map(button => (
            <ButtonLink
              href={button.href}
              as={button.as}
              color="primary"
              size="medium">
              {button.name}
            </ButtonLink>
          )
        )}
      </CardActions>
    </Card>
  )
}

export default MediaCard;