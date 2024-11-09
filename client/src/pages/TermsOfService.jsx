// src/pages/TermsOfService.jsx
import React from 'react';
import { Flex, Container, Heading, Text, Stack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <Flex bg="brand.50" minH="100vh" direction="column">
            <Navbar />
            <Container maxW="container.md" py={8} flex="1">
                <Heading as="h1" size="xl" mb={6} textAlign="center" color="brand.700">
                    Terms of Service
                </Heading>
                <Stack spacing={4}>
                    <Text fontSize="lg" color="gray.700">
                        These Terms of Service govern your use of our website. By using our website, you agree to these terms.
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        <strong>Acceptance of Terms:</strong> By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
                    </Text>
                    <Text fontSize="md" color="gray.600">
                        <strong>Changes to Terms:</strong> We may update these terms from time to time. It is your responsibility to review them periodically.
                    </Text>
                    {/* Add more sections as needed */}
                </Stack>
            </Container>
            <Footer />
        </Flex>
    );
};

export default TermsOfService;
