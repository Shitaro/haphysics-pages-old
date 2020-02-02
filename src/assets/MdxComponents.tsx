// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Map Mui components to MDX
// https://mdxjs.com/getting-started#mdxprovider
// https://mdxjs.com/guides/wrapper-customization
const components = {
    wrapper: (props: any) => <Container {...props} maxWidth="md" />,
    p: Typography,
    h1: (props: any) => <Typography {...props} component="h1" variant="h2" />,
    h2: (props: any) => <Typography {...props} component="h2" variant="h3" />,
    h3: (props: any) => <Typography {...props} component="h3" variant="h4" />,
    h4: (props: any) => <Typography {...props} component="h4" variant="h5" />,
    h5: (props: any) => <Typography {...props} component="h5" variant="h6" />,
    h6: (props: any) => <Typography {...props} component="h6" variant="h6" />,
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
    hr: Divider,
}

export default components;