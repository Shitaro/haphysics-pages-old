import React from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TwitterShareButton from "./TwitterShareButton";
import LineShareButton from "./LineShareButton";
import SaveToPocketButton from "./SaveToPocketButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            "& > *": {
                margin: theme.spacing(1),
            },
        },
    })
);

const ArticleFooter: React.FC<ArticleMeta> = props => {
    const classes = useStyles();
    const title = props.title;
    const url = `https://haphysics.com/articles/${props.id}`;

    return (
        <footer>
            <Divider />
            <Box color="text.primary" className={classes.root}>
                <TwitterShareButton title={title} url={url} />
                <LineShareButton title={title} url={url} />
                <SaveToPocketButton title={title} url={url} />
            </Box>
        </footer>
    )
};

export default ArticleFooter;