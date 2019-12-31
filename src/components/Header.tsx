// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

function Header() {
    return (
        <>
            <Link href="/">
                <Button variant="contained" color="primary">
                    Home
                </Button>
            </Link>
        </>
    )
}

export default Header;