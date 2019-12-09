// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react";
import styled from "styled-components";

type Props = {
    className?: string
}

const Component: React.FC<Props> = props => (
    <div className={props.className}>Hello, Next.js!</div>
)

const StyledComponent = styled(Component)`
    color: #f00;
`

export default StyledComponent;