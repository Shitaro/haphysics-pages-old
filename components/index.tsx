// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import { NextComponentType, NextPageContext } from "next";
import styled from "styled-components";

type Props = {
    className?: string
}

const Component : NextComponentType<NextPageContext, {}, Props> = props => (
    <div className = {props.className}>Hello, Next.js!</div>
)

const StyledComponent = styled(Component)`
    color: #f00;
`

export default StyledComponent;