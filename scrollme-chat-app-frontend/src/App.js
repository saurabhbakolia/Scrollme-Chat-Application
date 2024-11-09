// src/App.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import RoutesConfig from './routes/RoutesConfig';

const App = () => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				navigate('/login'); // Redirect to login if not logged in
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [navigate]);

	if (loading) {
		return <div>Loading...</div>; // Show loading state while checking auth
	}

	return <RoutesConfig />;
};

export default App;
