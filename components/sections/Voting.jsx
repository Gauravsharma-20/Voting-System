import React, { useState } from "react";
import SectionContainer from "../SectionContainer";
import VotingButtons from "../VotingButtons";
import {
    Button,
    useToast
} from '@chakra-ui/react';

export default function Voting({ addVoteToDocument }) {
    const [value, setValue] = useState("React");
    const toast = useToast();

    const handleOnClick = () => {
        addVoteToDocument(value);

        return (
            toast({
                title: "Response Submitted.",
                description: `Your response: ${value} is submitted successfully`,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        );
    };

    return (
        <SectionContainer
            id="voting"
            name="voting"
            headerText="Voting"
            useHeaderStyle
        >
            <VotingButtons value={value} setValue={setValue} />
            <Button
                colorScheme="blue"
                fontSize="lg"
                onClick={handleOnClick}
            >
                Submit
            </Button>
        </SectionContainer>
    );
};