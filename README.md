# Scrollme Chat Application

Scrollme is a modern, real-time chat application designed to deliver a fast and intuitive messaging experience. With support for one-on-one and group chats, Scrollme provides seamless communication through a clean, user-friendly interface.


## 🚀 Features

- **Real-Time Messaging**: Instant updates powered by WebSockets for a seamless experience.
- **Group Chat**: Communicate with multiple users in a single conversation.
- **Responsive Design**: Fully optimized for desktop and mobile views.
- **User Authentication**: Secure sign-up and login functionality.
- **Customizable Themes**: Switch between light and dark mode to suit your preference.
- **Optimized Performance**: Lightweight and efficient, suitable for high-traffic use.

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **WebSocket**: Socket.IO
- **Authentication**: JWT (JSON Web Tokens)

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [Project Structure](#-project-structure)
- [License](#-license)
- [Contact](#-contact)

---

## ⚙️ Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:saurabhbakolia/Scrollme-Chat-Application.git
   cd scrollme
   ```

2. **Install dependencies for both client and server**:
    ```js
    npm install           # Install backend dependencies
    cd client && npm install   # Install frontend dependencies
    ```
3. **Configure environment variables:**:
- Create a .env file in the root directory and add your environment variables (e.g., MongoDB URI, JWT secret, etc.).
- Sample:

    ```js
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```
4. **Start the application**:
- To start both the frontend and backend servers, run:
    ```js
    npm run dev
    ```


## 💻 Usage
After installation, open your browser and go to http://localhost:3000 to access the Scrollme chat application.

Register a new account or log in with an existing account.
Create or join a chat room to start messaging.
Invite others to join the conversation for group chat experience.

## 🤝 Contributing
Contributions are what make the open-source community a great place to learn, inspire, and create. Any contributions you make to Scrollme are greatly appreciated.

#### Steps to Contribute
1. Fork the Project.
2. Create your Feature Branch: git checkout -b feature/AmazingFeature.
3. Commit your Changes: git commit -m 'Add some AmazingFeature'.
4. Push to the Branch: git push origin feature/AmazingFeature.
5. Open a Pull Request.

Please refer to the CONTRIBUTING.md for more details.

## 📝 Code of Conduct
We expect all contributors to uphold our Code of Conduct. Please be respectful in interactions with fellow contributors.

## 📂 Project Structure
Scrollme/
├── client/           # Frontend application (React)
├── server/           # Backend server (Node.js, Express)
├── .env.example      # Environment variables example
├── LICENSE           # License file
├── README.md         # Project documentation
└── CONTRIBUTING.md   # Contribution guidelines

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

