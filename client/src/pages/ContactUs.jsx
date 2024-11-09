// src/pages/ContactUs.jsx
import React from 'react';
import { Box, Container, Heading, Text, Stack, Input, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <Box bg="brand.50" minH="100vh">
            <Navbar />
            <Container maxW="container.md" py={8}>
                <Heading as="h1" size="xl" mb={6} textAlign="center" color="brand.700">
                    Contact Us
                </Heading>
                <Stack spacing={4}>
                    <Text fontSize="lg" color="gray.700">
                        We would love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
                    </Text>
                    <Box bg="white" p={6} borderRadius="md" shadow="md">
                        <form>
                            <Stack spacing={4}>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" placeholder="Your Name" />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" placeholder="Your Email" />
                                </FormControl>
                                <FormControl id="message" isRequired>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea placeholder="Your Message" rows={6} />
                                </FormControl>
                                <Button colorScheme="brand" type="submit">
                                    Send Message
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Container>
            <Footer />
        </Box>
    );
};

export default ContactUs;
