<div align="center">
   <div>
      <img src="https://socialify.git.ci/yashksaini-coder/ChatterBox/image?forks=1&issues=1&name=1&pattern=Floating%20Cogs&pulls=1&stargazers=1&theme=Auto" alt="ChatterBox" width="640" height="320" />
   </div>
   <br>
   
   <div>
   
   ![Repo-Size](https://img.shields.io/github/repo-size/yashksaini-coder/ChatterBox)
   ![GitHub language count](https://img.shields.io/github/languages/count/yashksaini-coder/ChatterBox)
   ![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
   ![GitHub last commit](https://img.shields.io/github/last-commit/yashksaini-coder/ChatterBox)
   ![GitHub issues](https://img.shields.io/github/issues/yashksaini-coder/ChatterBox)
   ![GitHub pull requests](https://img.shields.io/github/issues-pr/yashksaini-coder/ChatterBox)
   ![GitHub forks](https://img.shields.io/github/forks/yashksaini-coder/ChatterBox)
   ![GitHub stars](https://img.shields.io/github/stars/yashksaini-coder/ChatterBox)
   ![GitHub watchers](https://img.shields.io/github/watchers/yashksaini-coder/ChatterBox)
   ![GitHub contributors](https://img.shields.io/github/contributors/yashksaini-coder/ChatterBox)
   ![GitHub license](https://img.shields.io/github/license/yashksaini-coder/ChatterBox)
   ![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square%29%5D%28http%3A%2F%2Fmakeapullrequest.com%29)
   </div>
</div>

---

## Table of Contents

- [Overview](#overview)
- [Environment](#environment)
- [Project Details](#project-details)
   - [Introduction](#introduction)
   - [Description](#description)
   - [Objective](#objective)
- [Project Category & Tools](#project-category--tools)
   - [Front-end Tools](#front-end-tools)
   - [Back-end Tools](#back-end-tools)
- [Module Description](#module-description)
   - [User Authentication Module](#user-authentication-module)
   - [Chat Module](#chat-module)
   - [Settings Module](#settings-module)
   - [Admin Module](#admin-module)
- [Conclusion](#conclusion)
- [Contributing](#contributing)
   - [Getting Started](#getting-started)
   - [Keeping Your Fork Up to Date](#keeping-your-fork-up-to-date)
- [File Structure](#file-structure)
- [Resources](#resources)


## Overview

ChatterBox is a real-time chat application designed for seamless communication between users. It features instant messaging, media sharing, and real-time notifications to ensure fluid conversations. The front end is built with HTML, CSS, and JavaScript, while the back end uses Flask, MongoDB, and Python. User authentication and administrative controls ensure data privacy and security. This project aims to provide a reliable and user-friendly platform for instant communication.

### Environment

- **Front End**:- HTML, CSS, Javascript
- **Back End**:- Flask, (Git) Version Control, Github, Python, Excel, Google Gemini API

---

## Project Details

The ChatterBox project is an ambitious endeavor to create a real-time chat application. This section delves into the intricate details of the project, outlining the technical specifications, design considerations, and the developmental approach. Our goal is to provide a comprehensive overview of the project's scope, including its features, architecture, and the technologies employed.

### Introduction

The proposed system is designed to be more efficient than traditional communication methods. It includes features such as real-time messaging, notifications, and media sharing. The proposed system is a completely computer-based application. Thousands of messages can be exchanged in real-time without significant delays. The demand for real-time communication applications is growing rapidly in today's digital world.

### Description

The real-time chat application aims to provide seamless communication between users, allowing instant exchange of messages, media, and files. It is built to handle a high volume of users and messages, ensuring reliability and performance.

### Objective

The main objective of this project is to develop a scalable and efficient real-time chat application. This includes implementing features like user authentication, message history, media sharing, and administrative controls. The application should be user-friendly and secure, ensuring data privacy and integrity.

---

## Project Category & Tools

Two basic tools in the project are front end and back end.

- **Front-End**:- The front end is visible to the user and responsible for interacting with the user. The front end includes the graphical user interface. It receives user queries and passes them to the back end.
- **Back-end**:- This end is not visible to the user but it performs all database–related tasks in the background. It receives user’s queries and passes them to the database server. The back end performs all database-related tasks in the background. It processes user queries, interacts with the database, and returns the results to the front end.

### Front-end Tools

- **HTML (Hypertext Markup Language)**:- HTML is the standard markup language used to create the structure and content of web pages. It defines the elements and layout of web pages.
- **CSS (Cascading Style Sheets)**:- CSS is used to control the presentation and layout of web pages. It's responsible for styling elements like fonts, colors, spacing, and positioning.
- **JavaScript**:- JavaScript is a programming language that allows to add interactivity and dynamic behavior to web pages. It can be used for form validation, user interface enhancements, and making asynchronous requests to the back end.

### Back-end Tools

- **Flask (Python Framework)**:- Flask is a lightweight and flexible web framework for Python, designed to make web development simple and scalable.
- **Version Control (e.g., Git)**:- Using version control is essential for managing code changes and collaborating with others on your project. Git is a widely used version control system.
- **MongoDB**:- MongoDB is a popular open-source NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON).
- **Excel**:- Excel, while primarily known as a spreadsheet tool, can be integrated into the backend of a chat application for specific functionalities such as Data Storage, Accessing, Generating report data.
- **Python**:- It is a versatile programming language known for its simplicity, readability, and vast ecosystem of libraries and frameworks. When used in the backend of a chat application, Python can handle various tasks efficiently.
- **API**:- Google Gemini API provides access to Google's machine learning and AI capabilities, including natural language processing (NLP), image recognition, and more.

---

## Module Description

### User Authentication Module

This module handles all aspects of user authentication and account management.

- **Sign Up**:- Allows new users to create an account by providing necessary details such as username, email, and password. The system may also include email verification to ensure the validity of the user's email address.
- **Login**:- Enables existing users to access their accounts by entering their credentials (username/email and password). The system can include features like "Remember Me" and two-factor authentication for added security.
- **Logout**:- Provides users with the ability to securely log out of their accounts, ensuring that their session is properly terminated to prevent unauthorized access.

### Chat Module

This module is the core of the chat application, enabling real-time communication between users.

- **Real-time Messaging**:- Facilitates instant messaging between users. Messages are transmitted and received in real-time, ensuring that conversations are fluid and immediate.
- **Media Sharing**:- Enables users to share various media types, such as images, videos, and documents, within their conversations. This enhances the communication experience by allowing users to exchange more than just text messages.
- **Real-time Notifications**:- Sends instant notifications to users about new messages, friend requests, and other relevant events. This ensures users are always aware of new activity as it happens.
- **Display Status**:- Display user status next to their name or profile picture in chat threads. Update status in real-time as users change their availability.

### Settings Module

This module lets users customize their account settings and personal preferences.

- **Update Profile**:- Allows users to update their personal information, such as their display name, profile picture, and contact details. This helps keep their profile up-to-date.
- **Change Password**:- Enables users to change their account password, ensuring that they can maintain the security of their account.

### Admin Module

This module provides administrative functionalities for managing the application and its users.

- **Manage Users**:- Allows administrators to view, edit, and manage user accounts. This can include actions like resetting passwords, banning users, or modifying user roles and permissions.
- **View Logs**:- Provides administrators with access to system logs and activity records. This is crucial for monitoring the application’s performance, detecting issues, and maintaining security by tracking user actions and system events.

---

## Conclusion

Our real-time chat application meets these demands with features like real-time messaging, group chats, media sharing, notifications, and search functionalities. Secure authentication and robust administrative controls ensure a reliable, user-friendly platform for instant communication.

---

## Contributing

<div>
  <h2><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp" width="35" height="35">Ready to Contribute?</h2>
</div>

Kindly go through [CONTRIBUTING.md](CONTRIBUITING.md) to understand everything from setup to contributing guidelines.
Thank you for your interest in contributing to our project! We welcome contributions from the community to help improve and enhance our work. This guide will walk you through the process of contributing using Git commands. Also, please follow our contribution guidelines, before contributing to the project.


### Getting Started

To contribute to our project, follow these steps:

1. **Fork the Repository:** Click on the [Fork](https://github.com/yashksaini-coder/ChatterBox/fork) button at the top right corner of the repository page. This will create a copy of the repository in your GitHub account.

2. **Clone the Repository:** Open your terminal and navigate to the directory where you want to clone the repository. Use the following command to clone the repository to your local machine:

    ```bash
    git clone https://github.com/yashksaini-coder/ChatterBox
    ```

3. **Create a New Branch:** Before making any changes, create a new branch to work on. Use the following command to create a new branch:

    ```bash
    git checkout -b your-branch-name
    ```

4. **Make Changes:** Make the necessary changes to the project files using your preferred text editor or IDE.

5. **Commit Changes:** Once you have made your changes, it's time to commit them. Use the following command to commit your changes:

    ```bash
    git add .
    git commit -m "Your commit message"
    ```

6. **Push Changes:** Push your changes to your forked repository using the following command:

    ```bash
    git push origin your-branch-name
    ```

7. **Create a Pull Request:** Go to the original repository on GitHub and click on the "New Pull Request" button. Fill in the necessary details and submit your pull request.

### Keeping Your Fork Up to Date

To keep your forked repository up to date with the original repository, follow these steps:

1. **Add the Upstream Remote:** In your terminal, navigate to your local repository and use the following command to add the upstream remote:

    ```bash
    git remote add upstream https://github.com/yashksaini-coder/ChatterBox
    ```

2. **Fetch the Latest Changes:** Use the following command to fetch the latest changes from the upstream repository:

    ```bash
    git fetch upstream
    ```

3. **Merge the Changes:** Once you have fetched the latest changes, use the following command to merge them into your local branch:

    ```bash
    git merge upstream/main
    ```

4. **Push the Changes:** Finally, push the merged changes to your forked repository using the following command:

    ```bash
    git push origin your-branch-name
    ```

---

##  File Structure

   The folder structure of the project is as follows:
   
   ```
    ChatterBox
    |
    |
    ├─ database/
    │  └─ userdata.xlsx
    ├─ log_file/
    │  ├─ read_files/
    │  │  └─ github.com_yashksaini-coder_0.png
    │  └─ YashSaini0ParasMutreja1.json
    ├─ report/
    │  ├─ comment.json
    │  └─ likecount.json
    ├─ static/
    │  ├─ css/
    │  │  ├─ all.css
    │  │  ├─ all.min.css
    │  │  ├─ brands.css
    │  │  ├─ brands.min.css
    │  │  ├─ chatterbox.css
    │  │  ├─ fontawesome.css
    │  │  ├─ fontawesome.min.css
    │  │  ├─ fontstyle.css
    │  │  ├─ regular.css
    │  │  ├─ regular.min.css
    │  │  ├─ root.css
    │  │  ├─ solid.css
    │  │  ├─ solid.min.css
    │  │  ├─ style.css
    │  │  ├─ style1.css
    │  │  ├─ svg-with-js.css
    │  │  ├─ svg-with-js.min.css
    │  │  ├─ v4-font-face.css
    │  │  ├─ v4-font-face.min.css
    │  │  ├─ v4-shims.css
    │  │  ├─ v4-shims.min.css
    │  │  ├─ v5-font-face.css
    │  │  └─ v5-font-face.min.css
    │  ├─ images/
    │  │  ├─ Default_midshot_celshading_style_centered_image_ultra_detailed_10.jpg
    │  │  ├─ indexicon.png
    │  │  └─ LinkedIN1.png
    │  ├─ js/
    │  │  ├─ additional.js
    │  │  ├─ ai_index.js
    │  │  ├─ app.js
    │  │  ├─ chatterbox.js
    │  │  ├─ data.js
    │  │  ├─ home.js
    │  │  ├─ load.js
    │  │  └─ message.js
    │  ├─ main_images/
    │  │  ├─ aiicon.png
    │  │  ├─ backarrow.png
    │  │  ├─ flask_gem_avatar.png
    │  │  ├─ homeicon.png
    │  │  ├─ indexicon.png
    │  │  ├─ loginicon.png
    │  │  ├─ person_avatar.png
    │  │  └─ pexels-pixabay-326055.jpg
    │  └─ webfonts/
    │     ├─ fa-brands-400.ttf
    │     ├─ fa-brands-400.woff2
    │     ├─ fa-regular-400.ttf
    │     ├─ fa-regular-400.woff2
    │     ├─ fa-solid-900.ttf
    │     ├─ fa-solid-900.woff2
    │     ├─ fa-v4compatibility.ttf
    │     └─ fa-v4compatibility.woff2
    ├─ templates/
    │  ├─ ai_index.html
    │  ├─ chats.html
    │  ├─ chatterbox.html
    │  ├─ home.html
    │  ├─ index.html
    │  ├─ login.html
    │  └─ messager.html
    ├─ .gitignore
    ├─ app.py
    ├─ CONTRIBUTING.md
    ├─ LICENSE
    ├─ README.md
    └─ requirements.txt
   ```
---

## Contributors

<!-- | Column 1 | Column 2 | Column 3 | Column 4 |
|----------|----------|----------|----------|
| Row 1    | Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    | Row 3    |
 -->

Thank you for contributing to our project! Your help is greatly appreciated in making ChatterBox even better. 😊
