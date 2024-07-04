<!-- <div>
    <a href="https://github.com/yashksaini-coder">
    <img src="https://socialify.git.ci/yashksaini-coder/Summer-Internship-Project/image?description=1&descriptionEditable=This%20summer%20internship%20project%20provided%20us%20with%20hands-on%20experience%20in%20developing%20a%20real-time%20chat%20application.&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" alt="Summer-Internship-Project" width="640" height="320" />
</div> -->

# 📚💻Summer Internship Project ☀️

This summer internship project provided us with hands-on experience in developing a real-time chat application. We learned to integrate front-end and back-end technologies, manage databases, and implement user authentication, enhancing our practical skills and teamwork.

---
## Index 📖

1. **[ChatterBox Project 💬](#chatterbox-project-💬)** 
2. **[Project Details](#project-details-📝)** :-
   - [Introduction](#introduction-📚)
   - [Description](#description-📝)
   - [Objective](#objective-🎯) 
3. **[Project Category and Tool](#project-category--tools-🛠️)** :-
   - [Front-end](#front-end-tools-🖥️)
   - [Back-end](#back-end-tools-🔧) 
4. **[Database Design of the Project](#database-design-of-the-project-📊)** 
5. **[Module Description](#module-description-🧩)** 
6. **[Conclusion](#conclusion-🏁)** 
7. **[Resources](#resources-📚)** 

---

## ChatterBox Project 💬

ChatterBox is a real-time chat application designed for seamless communication between users. It features instant messaging, media sharing, and real-time notifications to ensure fluid conversations. The front end is built with HTML, CSS, and JavaScript, while the back end uses Flask, MongoDB, and Python. User authentication and administrative controls ensure data privacy and security. This project aims to provide a reliable and user-friendly platform for instant communication.

### Environment 🌐

- **Front End**:- HTML, CSS, Javascript
- **Back End**:- Flask, (Git) Version Control, Python, Excel, MongoDB, API

---

## Project Details 📝

### Introduction 📚

The proposed system is designed to be more efficient than traditional communication methods. It includes features such as real-time messaging, notifications, and media sharing. The proposed system is a completely computer-based application. Thousands of messages can be exchanged in real-time without significant delays. The demand for real-time communication applications is growing rapidly in today's digital world.

### Description 📝

The real-time chat application aims to provide seamless communication between users, allowing instant exchange of messages, media, and files. It is built to handle a high volume of users and messages, ensuring reliability and performance.

### Objective 🎯

The main objective of this project is to develop a scalable and efficient real-time chat application. This includes implementing features like user authentication, message history, and media sharing. The application should be user-friendly and secure, ensuring data privacy and integrity.

---

## Project Category & Tools 🛠️

Two basic tools in the project are front end and back end.

- **Front-End**:- The front end is visible to the user and responsible for interacting with the user. The front end includes the graphical user interface. It receives user queries and passes them to the back end.
- **Back-end**:- This end is not visible to the user but it performs all database–related tasks in the background. It receives user’s queries and passes them to the database server. The back end performs all database-related tasks in the background. It processes user queries, interacts with the database, and returns the results to the front end.

### Front-end Tools 🖥️

- **HTML (Hypertext Markup Language)**:- HTML is the standard markup language used to create the structure and content of web pages. It defines the elements and layout of web pages.
- **CSS (Cascading Style Sheets)**:- CSS is used to control the presentation and layout of web pages. It's responsible for styling elements like fonts, colors, spacing, and positioning.
- **JavaScript**:- JavaScript is a programming language that allows to add interactivity and dynamic behavior to web pages. It can be used for form validation, user interface enhancements, and making asynchronous requests to the back end.

### Back-end Tools 🔧

- **Flask (Python Framework)**:- Flask is a lightweight and flexible web framework for Python, designed to make web development simple and scalable.
- **Version Control (e.g., Git)**:- Using version control is essential for managing code changes and collaborating with others on your project. Git is a widely used version control system.
- **MongoDB**:- MongoDB is a popular open-source NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON).
- **Excel**:- Excel, while primarily known as a spreadsheet tool, can be integrated into the backend of a chat application for specific functionalities such as Data Storage, Accessing, Generating report data.
- **Python**:- It is a versatile programming language known for its simplicity, readability, and vast ecosystem of libraries and frameworks. When used in the backend of a chat application, Python can handle various tasks efficiently.
- **API**:- Google Gemini API provides access to Google's machine learning and AI capabilities, including natural language processing (NLP), image recognition, and more.

---

## Database Design of the Project 📊

### TABLE 1:- USER_DETAILS

| USER_ID | USERNAME         | EMAIL_ID             | PASSWORD      |
|---------|------------------|----------------------|---------------|
| 100116  | Deepanshu Antil  | deepanshu16@gmail.com| deepanshu@16  |
| 100152  | Paras Mutreja    | paras52@gmail.com    | paras@52      |
| 100191  | Yash Saini       | yashsaini91@gmail.com| yashsaini@19  |

---

## Module Description 🧩

### User Authentication Module 🔐

This module handles all aspects of user authentication and account management.

- **Sign Up**:- Allows new users to create an account by providing necessary details such as username, email, and password. The system may also include email verification to ensure the validity of the user's email address.
- **Login**:- Enables existing users to access their accounts by entering their credentials (username/email and password). The system can include features like "Remember Me" and two-factor authentication for added security.
- **Logout**:- Provides users with the ability to securely log out of their accounts, ensuring that their session is properly terminated to prevent unauthorized access.

### Chat Module 💬

This module is the core of the chat application, enabling real-time communication between users.

- **Real-time Messaging**:- Facilitates instant messaging between users. Messages are transmitted and received in real-time, ensuring that conversations are fluid and immediate.
- **Media Sharing**:- Enables users to share various media types, such as images, videos, and documents, within their conversations. This enhances the communication experience by allowing users to exchange more than just text messages.
- **Real-time Notifications**:- Sends instant notifications to users about new messages, friend requests, and other relevant events. This ensures users are always aware of new activity as it happens.
- **Display Status**:- Display user status next to their name or profile picture in chat threads. Update status in real-time as users change their availability.

### Settings Module ⚙️

This module lets users customize their account settings and personal preferences.

- **Update Profile**:- Allows users to update their personal information, such as their display name, profile picture, and contact details. This helps keep their profile up-to-date.
- **Change Password**:- Enables users to change their account password, ensuring that they can maintain the security of their account.

### Admin Module 🛡️

This module provides administrative functionalities for managing the application and its users.

- **Manage Users**:- Allows administrators to view, edit, and manage user accounts. This can include actions like resetting passwords, banning users, or modifying user roles and permissions.
- **View Logs**:- Provides administrators with access to system logs and activity records. This is crucial for monitoring the application’s performance, detecting issues, and maintaining security by tracking user actions and system events.

---

## Conclusion 🏁

The need for authentic, instant communication drives innovation in communication tools, emphasizing high performance, scalability, and security. Personalization trends favor real-time interactions, though diverse user needs are also considered.

Our real-time chat application meets these demands with features like real-time messaging, group chats, media sharing, notifications, and search functionalities. Secure authentication and robust administrative controls ensure a reliable, user-friendly platform for instant communication.

---

## Resources 📚

- HTML:- <https:-//developer.mozilla.org/en-US/docs/Web/HTML>
- CSS:- <https:-//developer.mozilla.org/en-US/docs/Web/CSS>
- JAVASCRIPT:- <https:-//developer.mozilla.org/en-US/docs/Web/JavaScript>
- PYTHON:- <https:-//docs.python.org/3.12/tutorial/index.html>
- FLASK:- <https:-//python-adv-web-apps.readthedocs.io/en/latest/flask.html>
- GIT:- <https:-//git-scm.com/doc>
- MONGODB:- <https:-//www.mongodb.com/docs/>
- API:- <https:-//ai.google.dev/gemini-api/docs>
- GEEKSFORGEEKS:- <https:-//www.geeksforgeeks.org/>
- MEDIUM:- <https:-//medium.com/>
- W3SCHOOLS:- <https:-//www.w3schools.com/>
- TUTORIALSPOINT:- <https:-//www.tutorialspoint.com/index.htm>
- STACKOVERFLOW:- <https:-//stackoverflow.com/>
