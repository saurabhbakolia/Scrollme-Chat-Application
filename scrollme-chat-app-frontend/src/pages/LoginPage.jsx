import { useEffect, useState } from "react";
import {
    auth,
    provider,
    signInWithPopup,
    signInWithPhoneNumber,
    RecaptchaVerifier,
} from "../services/firebase";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();
    const location = useLocation();

    useEffect(() => {
        // Disable app verification for testing in development mode
        if (process.env.NODE_ENV === "development") {
            auth.settings.appVerificationDisabledForTesting = true;
        }

        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(location.pathname);
            if (user && location.pathname === "/login") {
                navigate("/"); // Redirect to the homepage if already logged in and on the login page
            }
        });
        return () => unsubscribe(); // Cleanup on unmount
    }, [navigate, location]);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate("/"); // Redirect to the homepage after successful login
        } catch (error) {
            console.error("Error logging in:", error);
            toast({
                title: "Error",
                description: "There was an error logging in.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                'recaptcha-container',
                {
                    size: 'invisible',
                    callback: () => {
                        handleSendOtp();
                    },
                    'expired-callback': () => {
                        console.error('Recaptcha expired');
                    }
                },
            );
        }
    };

    const handleSendOtp = async () => {
        setupRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        try {
            let confirmationResult;

            // Use test number in development, real number in production
            if (process.env.NODE_ENV === "development") {
                const testPhoneNumber = "+917014157594"; // Use a test number
                const testVerificationCode = "220049";  // Use a test OTP code

                confirmationResult = await signInWithPhoneNumber(auth, testPhoneNumber, appVerifier);
                confirmationResult.confirm(testVerificationCode);
                setVerificationId(confirmationResult.verificationId);
                console.log("Test OTP sent, verificationId:", confirmationResult.verificationId);
            } else {
                confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
                setVerificationId(confirmationResult.verificationId);
                setOtpSent(true);
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            toast({
                title: "Error",
                description: "There was an error sending OTP.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleVerifyOtp = async () => {
        if (verificationId && otp) {
            window.confirmationResult.confirm(otp).then(async (res) => {
                console.log(res);
            }).className(err => {
                console.error(err)
                toast({
                    title: "Error",
                    description: "There was an error verifying OTP.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            })
        }
    };


    return (
        <Container maxW="lg" centerContent>
            <Box
                p={6}
                borderWidth={1}
                borderRadius="md"
                boxShadow="lg"
                w="100%"
                mt={10}
                bg="white"
            >
                <Text fontSize="2xl" mb={4} textAlign="center" fontWeight="bold">
                    Login
                </Text>
                <Stack spacing={4}>
                    <Button colorScheme="teal" onClick={handleLogin} w="full">
                        Login with Google
                    </Button>
                    <Text fontSize="lg" textAlign="center">
                        or
                    </Text>
                    <Box>
                        <FormControl id="phone-number" mb={4}>
                            <FormLabel textAlign="center">Enter your phone number</FormLabel>
                            <Input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Enter your phone number"
                            />
                        </FormControl>
                        <Button colorScheme="teal" onClick={handleSendOtp} w="full">
                            Send OTP
                        </Button>
                        {otpSent && (
                            <Box mt={4}>
                                <FormControl id="otp" mb={4}>
                                    <FormLabel>Enter OTP</FormLabel>
                                    <Input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                    />
                                </FormControl>
                                <Button colorScheme="teal" onClick={handleVerifyOtp} w="full">
                                    Verify OTP
                                </Button>
                            </Box>
                        )}
                    </Box>
                    <Box id="recaptcha-container" />
                </Stack>
            </Box>
        </Container>
    );
};

export default LoginPage;
