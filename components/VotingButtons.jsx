import {
    Box,
    Flex,
    Stack,
    Text,
    useColorModeValue,
    useRadio,
    useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { colors } from '../theme';
import Image from 'next/image';
import reactLogo from '../public/react.svg';
import androidLogo from '../public/android.svg';
import { FaAndroid, FaReact } from 'react-icons/fa';

const RadioCard = (props) => {
    console.log(props);
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkBox = getCheckboxProps();

    const bg = useColorModeValue(colors.tertiary.light, colors.tertiary.dark);
    const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);

    return (
        <Box 
            as="label"
            onClick={() => props.setValue(props.children)}
        >
            <input {...input} />
            <Flex
                {...checkBox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                bg={props.bg}
                color={props.color}
                _checked={{
                    // bg: bg,
                    // color: "white",
                    // borderColor: "teal.600",
                    transform: "scale(1.2)",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={5}
                py={3}
                textAlign="center"
                direction={{
                    md: "row",
                    sm: "row",
                    base: "row",
                }}
                transition="all 0.2s ease-in-out"
                _hover={{
                    transform: "scale(1.2)",
                }}
            >
                {/* <Image 
                    src={props.src}
                    width={50}
                    height={50}
                /> */}
                {
                    props.children == "React" ? 
                    <FaReact size="40px" /> 
                    : 
                    <FaAndroid size="40px" />
                }
                <Text
                    fontSize={{
                        md: "2rem",
                        sm: "1.6rem",
                        base: "1.6rem",
                    }}
                    my="auto"
                    ml="5px"
                    w={{
                        sm: "26vw",
                        base: "26vw",
                        md: "auto"
                    }}
                    lineHeight="1.9rem"
                >
                    {props.children}
                </Text>
            </Flex>
        </Box>
    );
};

export default function VotingButtons({ value, setValue }) {
    const options = [
        {
            name: 'React',
            src: reactLogo,
            color: "#61dafb",
            bg: "#282c34",
        },
        {
            name: 'Android',
            src: androidLogo,
            color: "#000",
            bg: "#3ddc84",
        }
    ];
    // const options = ["react", "android"];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "React",
        onChange: console.log,
    });

    const group = getRootProps();

    return (
        <Stack
            {...group}
            m="24px"
            mt="3vh"
            width="75vw"
            // height="60vh"
            direction={{
                md: "row",
                sm: "column",
                base: "column",
            }}
            justifyContent="center"
            alignItems="center"
            spacing={5}
        >
            {options.map((option) => {
                const value = option.name;
                const radio = getRadioProps({ value })
                return (
                    <RadioCard key={option.name} {...radio} setValue={setValue} color={option.color} bg={option.bg}>
                        {option.name}
                    </RadioCard>
                );
            })}
        </Stack>
    );
};