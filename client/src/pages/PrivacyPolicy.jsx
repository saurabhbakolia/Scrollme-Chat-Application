// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Container, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <Flex bg="brand.50" minH="100vh" direction="column">
            <Navbar />
            <Container maxW="container.md" py={8} flex="1">
                <Heading as="h1" size="xl" mb={6} textAlign="center" color="brand.700">
                    Privacy Policy
                </Heading>
                <Stack spacing={4}>
                    <Text fontSize="lg" color="gray.700">
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully.
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        <strong>Information Collection:</strong> We collect information about you when you use our website, including personal information that you voluntarily provide.
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        <strong>Use of Information:</strong> We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
                    </Text>
                    {/* Add more sections as needed */}
                </Stack>
            </Container>
            <Footer />
        </Flex>
    );
};

export default PrivacyPolicy;
