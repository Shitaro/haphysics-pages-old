import React from "react";
import { NextPage } from "next";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Page: NextPage = () => {
    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" gutterBottom>
                Tag List
            </Typography>
        </Container>
    )
}

export default Page;