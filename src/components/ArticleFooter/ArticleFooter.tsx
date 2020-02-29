import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TwitterShareButton from "react-share/lib/TwitterShareButton";
import TwitterIcon from "react-share/lib/TwitterIcon";
import PocketShareButton from "react-share/lib/PocketShareButton";
import PocketIcon from "react-share/lib/PocketIcon";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        buttonRoot: {
            margin: theme.spacing(1),
        },
    })
);

const ArticleFooter: React.FC<ArticleMeta> = props => {
    const classes = useStyles();

    return (
        <footer>
            <Divider />
            <Box color="text.primary" className={classes.root}>
                <TwitterShareButton title={props.title} url={`https://haphysics.com/articles/${props.id}`} hashtags={["幸福の物理", "Haphysics"]}>
                    <Button variant="contained" color="default" startIcon={<TwitterIcon size={40} round />} className={classes.buttonRoot}>
                        Share on Twitter
                            </Button>
                </TwitterShareButton>
                <PocketShareButton title={props.title} url={`https://haphysics.com/articles/${props.id}`} className={classes.buttonRoot}>
                    <Button variant="contained" color="default" startIcon={<PocketIcon size={40} round />}>
                        Save to Pocket
                        </Button>
                </PocketShareButton>
            </Box>
        </footer>
    )
};

export default ArticleFooter;