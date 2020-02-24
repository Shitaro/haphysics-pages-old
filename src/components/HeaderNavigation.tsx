// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { fade, makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Hidden from "@material-ui/core/Hidden";
import ButtonLink from "./atoms/ButtonLink";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 100,
        "&:focus": {
          width: 200
        }
      }
    },
    offset: theme.mixins.toolbar,
  })
);

const SearchBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  )
}

function HeaderNavigation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <ToolBar>
          <Hidden xsDown>
            <ButtonLink href="/" size="large">
              Home
            </ButtonLink>
            <ButtonLink href="/category" size="large">
              Category
            </ButtonLink>
            <ButtonLink href="/tag" size="large">
              Tag
            </ButtonLink>
          </Hidden>
          <SearchBar />
        </ToolBar>
      </AppBar>
      {/* Fill the page with blanks so that the page does not hide behind the toolbar
          https://material-ui.com/components/app-bar/#fixed-placement */}
      <div className={classes.offset} />
    </div>
  );
}

export default HeaderNavigation;