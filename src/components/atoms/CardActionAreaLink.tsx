// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Link, { LinkProps } from "next/link";
import CardActionArea, { CardActionAreaProps } from "@material-ui/core/CardActionArea";

type CardActionAreaLinkProps = Omit<CardActionAreaProps<"a">, "href"> & Pick<LinkProps, "href" | "as">;

const CardActionAreaLink = React.forwardRef<any, CardActionAreaLinkProps>(
    ({href, as, ...props}, ref) => (
        <Link href={href} as={as} passHref>
            <CardActionArea component="a" ref={ref} {...props} />
        </Link>
    )
)

export default CardActionAreaLink;