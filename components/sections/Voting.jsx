import React, { Fragment, useState } from "react";
import Image from 'next/image';
import SectionContainer from "../SectionContainer";
import VotingButtons from "../VotingButtons";
import {
    Button,
    Text,
    useToast
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';
import googleSignInButton from '../../public/btn_google_signin_dark_normal_web@2x.png';
import { FcGoogle } from 'react-icons/fc';
import app from '../../firebase/clientApp';
import { getFirestore, collection, doc, addDoc, setDoc, updateDoc, increment } from "firebase/firestore";

export default function Voting() {
    const [session, loading] = useSession();

    const db = getFirestore(app);

    const addVoteToDocument = async (vote) => {
        // if (vote == 'React') {
        // await updateDoc(doc(db, "votes", session.user.email), {
        //     React: increment(1),
        //     // 'React Native': increment(0),
        //     Android: increment(0),
        // });
        // } else if (vote == "Android") {
        // await updateDoc(doc(db, "votes", session.user.email), {
        //     React: increment(0),
        //     Android: increment(1),
        //     // 'React Native': increment(1),
        // });
        // }
        await setDoc(doc(db, "votes", session.user.email), {
            vote,
        });
    };
    
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
            headerText="ACM CSS PEC Open-Source Voting"
            useHeaderStyle
        >
            <Text
                as="h2"
                fontSize="1.5rem"
                textAlign="center"
            >
                What would you like to learn and work on first?
            </Text>
            {session && (
                <Fragment>
                    <VotingButtons value={value} setValue={setValue} />
                    <Button
                        colorScheme="blue"
                        fontSize="lg"
                        onClick={handleOnClick}
                    >
                        Submit
                    </Button>
                </Fragment>
            )}
            {!session && (
                <Button
                    onClick={() => 
                        signIn("google", { callbackUrl: "https://pec-acm-voting.vercel.app/" })
                    }
                    mt="2vh"
                >
                    {/* <Image
                        src={googleSignInButton}
                        alt="Google Sign In"
                        height={50}
                        width={200}
                    /> */}
                    <FcGoogle size={30} />
                    <Text
                        ml={"7px"}
                    >
                        Sign in with Google to continue
                    </Text>
                </Button>
            )}
        </SectionContainer>
    );
};