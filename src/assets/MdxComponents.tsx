// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import ArticleLayout from "@layouts/ArticleLayout";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontWeight: 700,
            // To fix page header overlaps in-page anchors
            // Reference of value of margin/padding:
            // https://material-ui.com/customization/default-theme/
            paddingTop: theme.spacing(7),
            marginTop: -theme.spacing(4),
            [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
                paddingTop: theme.spacing(6),
                marginTop: -theme.spacing(4),
            },
            [theme.breakpoints.up("sm")]: {
                paddingTop: theme.spacing(8),
                marginTop: -theme.spacing(6),
            },
        },
    })
);

// Map Mui components to MDX
// https://mdxjs.com/getting-started#mdxprovider
// https://mdxjs.com/guides/wrapper-customization

const components = {
    wrapper: (props: any) => <ArticleLayout {...props} />,
    p:  (props: any) => <Typography {...props} component="p"  variant="body1" paragraph />,
    h1: (props: any) => <Typography {...props} component="h1" variant="h1" gutterBottom />,
    h2: (props: any) => <Typography {...props} component="h2" variant="h2" id={props.children} className={useStyles().heading} gutterBottom />,
    h3: (props: any) => <Typography {...props} component="h3" variant="h4" id={props.children} className={useStyles().heading} gutterBottom />,
    h4: (props: any) => <Typography {...props} component="h4" variant="h5" id={props.children} className={useStyles().heading} gutterBottom />,
    h5: (props: any) => <Typography {...props} component="h5" variant="h6" gutterBottom />,
    h6: (props: any) => <Typography {...props} component="h6" variant="h6" gutterBottom />,
    ul: (props: any) => <Typography {...props} component="ul" />,
    ol: (props: any) => <Typography {...props} component="ol" />,
    li: (props: any) => <Typography {...props} component="li" />,
    table: (props: any) => <Table {...props} />,
    tbody: (props: any) => <TableBody {...props} />,
    thead: (props: any) => <TableHead {...props} />,
    tr: (props: any) => <TableRow {...props} />,
    td: ({align, ...props}: any) => <TableCell align={align||undefined} {...props} />,
    th: ({align, ...props}: any) => <TableCell align={align||undefined} {...props} />,
    inlineCode: (props: any) => <code class="language-none" {...props} />,
    input: (props: any) => {
        if (props.type === "checkbox") {
            return <Checkbox {...props} color="primary" disabled={false} disableRipple />;
        }
        return <input {...props} />;
    },
    hr: Divider,
}

export default components;