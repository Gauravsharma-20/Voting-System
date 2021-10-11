import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    Spacer,
    Stack,
    Tooltip,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Sticky from "react-stickynode";

import { colors } from "../theme";

const MenuToggle = ({ isOpen, onOpen }) => (
    <Box display={{ base: "block", md: "none" }} pr={4}>
        <Button onClick={onOpen}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
    </Box>
);

const ColorModeButton = ({ mr }) => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const nextMode = useColorModeValue("dark", "light");

    return (
        <Tooltip
            label={`Toggle ${nextMode} mode`}
            aria-label={`Toggle ${nextMode} mode`}
        >
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Toggle ${nextMode} mode`}
                variant="ghost"
                color="current"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
                style={{ marginRight: mr }}
            />
        </Tooltip>
    );
};

const MenuLinks = ({ onClose }) => (
    <Stack
        display={{ base: "none", sm: "none", md: "block" }}
        width={{ sm: "full", md: "auto" }}
        spacing="24px"
        direction={["column", "row", "row", "row"]}
        alignItems="center"
    >
        <ColorModeButton mr="12px" />
    </Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        direction={["column"]}
                        spacing="24px"
                        mt="20vh"
                    >
                        <ColorModeButton />
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
);

export default function NavBar() {
    const primary = useColorModeValue(
        colors.primary.light,
        colors.primary.dark
    );
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Sticky enabled innerZ={99}>
            <Stack
                as="header"
                w="100%"
                direction={["row", "row", "row", "row"]}
                alignItems="center"
                justifyContent="center"
                bg={primary}
            >
                <Spacer />
                <MenuLinks onClose={onClose} />
                <NavMenu isOpen={isOpen} onClose={onClose} />
                <MenuToggle isOpen={isOpen} onOpen={onOpen} />
            </Stack>
        </Sticky>
    );
}