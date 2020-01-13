// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';
import Link from "next/link";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from "@material-ui/icons/Home";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            position: "fixed",
            bottom: 0,
            background: theme.palette.primary.main,
            width: "100%",
            height: theme.spacing(7),
        },
        iconRoot: {
            color: theme.palette.common.black,
        }
    })
);

export default function SimpleBottomNavigation() {
    const classes = useStyles();

    return (
        <Hidden smUp>
            <BottomNavigation
                className={classes.root}
            >
                <Link href="/" passHref>
                    <BottomNavigationAction
                        label="HOME"
                        icon={<HomeIcon />}
                        showLabel
                        classes={{
                            root: classes.iconRoot
                        }}
                        component="a"
                    />
                </Link>
            </BottomNavigation>
        </Hidden>
    );
}