import React from "react";
import PocketShareButton from "react-share/lib/PocketShareButton";
import PocketIcon from "react-share/lib/PocketIcon";

type Props = {
    title: string;
    url: string;
    className?: string;
}

const SaveToPocketButton: React.FC<Props> = props => (
    <PocketShareButton title={props.title} url={props.url}>
        <PocketIcon size={40} round />
    </PocketShareButton>
)

export default SaveToPocketButton;