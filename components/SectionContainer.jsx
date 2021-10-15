import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from '../styles/components/SectionContainer.module.css'

export default function SectionContainer({
    children,
    headerMt = '',
    headerText = '',
    useHeaderStyle = false,
    ...props
}) {
    const color = useColorModeValue('secondary.light', 'secondary.dark');

    return (
        <div className={styles.container} {...props}>
            <Fade>
                <div className={styles.column} style={{ padding: "0 20px" }}> 
                    <Text
                        as="h1"
                        color={color}
                        mt={headerMt}
                        className={useHeaderStyle ? styles.header : ""}
                        textAlign="center"
                    >
                        {headerText}
                    </Text>
                    {children}
                </div>
            </Fade>
        </div>
    );
};