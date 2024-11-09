// src/routes/RoutesConfig.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ChatPage from '../pages/ChatPage';
import LoginPage from '../pages/LoginPage';
import ContactUs from '../pages/ContactUs';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import ProtectedRoute from '../components/ProtectedRoute';

const RoutesConfig = () => (
	<Routes>
		<Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
		<Route path="/chat" element={<ProtectedRoute element={<ChatPage />} />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="/contact" element={<ContactUs />} />
		<Route path="/privacy" element={<PrivacyPolicy />} />
		<Route path="/terms" element={<TermsOfService />} />
		<Route path="*" element={<h1>404 Not Found</h1>} />
	</Routes>
);

export default RoutesConfig;
