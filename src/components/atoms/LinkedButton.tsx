// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Link, { LinkProps } from "next/link";
import Button, { ButtonProps } from "@material-ui/core/Button";

type LinkedButtonProps = Omit<ButtonProps, "href" | "classes"> & Pick<LinkProps, "href" | "as" >

const LinkedButton = React.forwardRef<any, LinkedButtonProps>(
    ({href, as, ...props}, ref) => (
        <Link href={href} as={as} passHref>
            <Button ref={ref} {...props} />
        </Link>
    )
)

LinkedButton.displayName = "LinkedButton";

export default LinkedButton;