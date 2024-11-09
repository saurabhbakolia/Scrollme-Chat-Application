// src/styles/theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			50: "#e3f2fd",
			100: "#bbdefb",
			200: "#90caf9",
			300: "#64b5f6",
			400: "#42a5f5",
			500: "#2196f3",
			600: "#1e88e5",
			700: "#1976d2",
			800: "#1565c0",
			900: "#0d47a1",
		},
		chat: {
			incoming: "#e1f5fe", // Light blue for incoming messages
			outgoing: "#c8e6c9", // Light green for outgoing messages
			border: "#b0bec5", // Light grey for borders
			text: "#000000", // Black text color
		},
	},
	fonts: {
		heading: "Poppins, sans-serif",
		body: "Roboto, sans-serif",
	},
	styles: {
		global: {
			body: {
				bg: "gray.50",
				color: "gray.800",
				fontFamily: "Roboto, sans-serif",
			},
			".chat-container": {
				maxWidth: "600px",
				margin: "0 auto",
				padding: "20px",
			},
			".message": {
				padding: "10px",
				borderRadius: "8px",
				marginBottom: "10px",
				display: "flex",
				alignItems: "center",
			},
			".message.incoming": {
				bg: "chat.incoming",
				borderLeft: `2px solid ${"chat.border"}`,
			},
			".message.outgoing": {
				bg: "chat.outgoing",
				borderRight: `2px solid ${"chat.border"}`,
				marginLeft: "auto",
			},
			".message-text": {
				fontSize: "md",
				color: "chat.text",
			},
		},
	},
	components: {
		Button: {
			baseStyle: {
				borderRadius: "md",
			},
			sizes: {
				lg: {
					fontSize: "lg",
					px: "24px",
					py: "12px",
				},
			},
			variants: {
				solid: {
					bg: "brand.500",
					color: "white",
					_hover: {
						bg: "brand.400",
					},
				},
				outline: {
					borderColor: "brand.500",
					color: "brand.500",
					_hover: {
						bg: "brand.50",
					},
				},
			},
		},
		Input: {
			variants: {
				outline: {
					field: {
						borderColor: "chat.border",
						_hover: {
							borderColor: "brand.500",
						},
						_focus: {
							borderColor: "brand.500",
							boxShadow: "0 0 0 1px brand.500",
						},
					},
				},
			},
		},
	},
});

export default theme;
