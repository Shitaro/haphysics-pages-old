import React from "react";
import ReactLineShareButton from "react-share/lib/LineShareButton";
import LineIcon from "react-share/lib/LineIcon";

type Props = {
    title: string;
    url: string;
    className?: string;
}

const LineShareButton: React.FC<Props> = props => (
    <ReactLineShareButton title={props.title} url={props.url}>
        <LineIcon size={40} round />
    </ReactLineShareButton>
)

export default LineShareButton;