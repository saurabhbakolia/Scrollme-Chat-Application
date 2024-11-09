// components/Footer.js
import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="brand.700" color="white" py={4} px={8} borderTop="1px" borderColor="brand.600" mt="auto">
            <Flex align="center" justify="space-between" direction={{ base: 'column', md: 'row' }}>
                <Text>&copy; {new Date().getFullYear()} ScrollMe Chat, Inc.</Text>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
                    <Link href="/contact" px={3} py={1} _hover={{ textDecoration: 'underline', color: 'brand.300' }}>
                        Contact Us
                    </Link>
                    <Link href="/privacy" px={3} py={1} _hover={{ textDecoration: 'underline', color: 'brand.300' }}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms" px={3} py={1} _hover={{ textDecoration: 'underline', color: 'brand.300' }}>
                        Terms of Service
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
