// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Link, { LinkProps } from "next/link";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";

type ListItemLinkProps = Omit<ListItemProps<"a", { button?: true }>, "href"> & Pick<LinkProps, "href" | "as">;

const ListItemLink = React.forwardRef<any, ListItemLinkProps>(
    ({href, as, ...props}, ref) => (
        <Link href={href} as={as} passHref>
            <ListItem button component="a" ref={ref} {...props} />
        </Link>
    )
)

export default ListItemLink;