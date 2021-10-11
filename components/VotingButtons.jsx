import {
    Box,
    Flex,
    HStack,
    Text,
    useColorModeValue,
    useRadio,
    useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { colors } from '../theme';
import Image from 'next/image';
import logo from '../public/react.svg';

const RadioCard = (props) => {
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
                _checked={{
                    bg: bg,
                    color: "white",
                    borderColor: "teal.600",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={5}
                py={3}
                textAlign="center"
                direction={{
                    md: "row",
                    sm: "column",
                    base: "column",
                }}
            >
                <Image 
                    src={logo}
                    width={50}
                    height={50}
                />
                <Text
                    fontSize={{
                        md: "2rem",
                        sm: "1.3rem",
                        base: "1.3rem",
                    }}
                    ml="5px"
                >
                    {props.children}
                </Text>
            </Flex>
        </Box>
    );
};

export default function VotingButtons({ value, setValue }) {
    const options = ['React', 'React Native'];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "React",
        onChange: console.log,
    });

    const group = getRootProps();

    return (
        <HStack
            {...group}
            m="24px"
            mt="3vh"
            width="75vw"
            // height="60vh"
            justifyContent="center"
            alignItems="flex-start"
        >
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <RadioCard key={value} {...radio} setValue={setValue}>
                        {value}
                    </RadioCard>
                );
            })}
        </HStack>
    );
};