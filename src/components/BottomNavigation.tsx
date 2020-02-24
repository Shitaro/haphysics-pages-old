// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';
import { makeStyles, createStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Folder";
import TagIcon from "@material-ui/icons/Label";
import Hidden from "@material-ui/core/Hidden";
import BottomNavigationActionLink from "./atoms/BottomNavigationActionLink";

const bottomNavHeight = createMuiTheme().spacing(7);

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            position: "fixed",
            bottom: 0,
            background: theme.palette.primary.main,
            width: "100%",
            height: bottomNavHeight,
        },
        iconRoot: {
            color: theme.palette.common.black,
        },
        offset: { 
            paddingTop: bottomNavHeight
        },
    })
);

export default function SimpleBottomNavigation() {
    const classes = useStyles();

    return (
        <Hidden smUp>
            <div className={classes.offset} />
            <BottomNavigation
                className={classes.root}
            >
                <BottomNavigationActionLink
                    href="/"
                    label="HOME"
                    icon={<HomeIcon />}
                    showLabel
                    classes={{
                        root: classes.iconRoot
                    }}
                />
                <BottomNavigationActionLink
                    href="/category"
                    label="CATEGORY"
                    icon={<CategoryIcon />}
                    showLabel
                    classes={{
                        root: classes.iconRoot
                    }}
                />
                <BottomNavigationActionLink
                    href="/tag"
                    label="TAG"
                    icon={<TagIcon />}
                    showLabel
                    classes={{
                        root: classes.iconRoot
                    }}
                />
            </BottomNavigation>
        </Hidden>
    );
}