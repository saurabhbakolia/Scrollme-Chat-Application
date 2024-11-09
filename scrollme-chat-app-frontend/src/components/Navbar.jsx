// components/Navbar.js
import React from 'react';
import { Box, Flex, Link, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import UserProfileDropdown from './UserProfileDropdown';
import { signOut } from '../services/firebase';
import { auth } from '../services/firebase';

const Navbar = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <Box
            bg="brand.500"
            px={4}
            py={2}
            boxShadow="md"
            position="fixed"
            top="0"
            left="0"
            width="100%"
            zIndex="sticky" // Ensures it stays on top of other content
        >
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <Flex alignItems="center">
                    <Link href="/" fontSize="2xl" color="white" fontWeight="bold">
                        ScrollMe Chat
                    </Link>
                </Flex>

                <Flex alignItems="center">
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <Link href="/chat" px={4} py={2} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.600' }} color="white">
                            Chat Rooms
                        </Link>
                        <Link href="/profile" px={4} py={2} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.600' }} color="white">
                            Profile
                        </Link>
                        <Link href="/settings" px={4} py={2} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.600' }} color="white">
                            Settings
                        </Link>
                    </Flex>

                    {user && (
                        <UserProfileDropdown user={user} onLogout={handleLogout} />
                    )}
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            {isOpen ? (
                <Box pb={4} bg="brand.500" display={{ md: 'none' }}>
                    <Stack as="nav" spacing={4}>
                        <Link href="/chatrooms" color="white" _hover={{ bg: 'brand.600', textDecoration: 'none' }}>
                            Chat Rooms
                        </Link>
                        <Link href="/profile" color="white" _hover={{ bg: 'brand.600', textDecoration: 'none' }}>
                            Profile
                        </Link>
                        <Link href="/settings" color="white" _hover={{ bg: 'brand.600', textDecoration: 'none' }}>
                            Settings
                        </Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
