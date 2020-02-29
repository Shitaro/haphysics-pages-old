import React from "react";
import ReactTwitterShareButton from "react-share/lib/TwitterShareButton";
import TwitterIcon from "react-share/lib/TwitterIcon";

type Props = {
    title: string;
    url: string;
    className?: string;
}

const TwitterShareButton: React.FC<Props> = props => (
    <ReactTwitterShareButton title={props.title} url={props.url} hashtags={["幸福の物理", "Haphysics"]}>
        <TwitterIcon size={40} round />
    </ReactTwitterShareButton>
)

export default TwitterShareButton;