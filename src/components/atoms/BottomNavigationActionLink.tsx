// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Link, { LinkProps } from "next/link";
import BottomNavigationAction, { BottomNavigationActionProps } from '@material-ui/core/BottomNavigationAction';

type BottomNavigationActionLinkProps = Omit<BottomNavigationActionProps<"a">, "href"> & Pick<LinkProps, "href" | "as">;

const BottomNavigationActionLink = React.forwardRef<any, BottomNavigationActionLinkProps>(
    ({href, as, ...props}, ref) => (
        <Link href={href} as={as} passHref>
            <BottomNavigationAction component="a" ref={ref} {...props} />
        </Link>
    )
)

export default BottomNavigationActionLink;