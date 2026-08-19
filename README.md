# 🌍 REST API Country Explorer

A responsive country information web application built while learning how **frontend applications interact with REST APIs**.

This project allows users to explore country information, search for countries, filter countries by region, and view detailed information about individual countries.

## 🚀 Live Project

🔗 **GitHub Repository:**
https://github.com/tm-empire/Rest-api

## 📌 About the Project

This project was created as part of my journey in learning **modern web development and application architecture**.

The main focus of the project is understanding how a frontend application can consume data from a REST API, process that data using JavaScript, and dynamically render it in the browser.

I am also using this project to improve my understanding of **frontend architecture and backend architecture**, including how data flows between the client, APIs, and future backend services.

## ✨ Features

* 🌍 Display country information
* 🔎 Search countries by name
* 🌐 Filter countries by region
* 📄 View detailed country information
* 🏳️ Display country flags
* 🌙 Light/Dark mode
* 🔗 Pass country data between pages using URL parameters
* 📱 Responsive user interface
* ⚡ Dynamic rendering using JavaScript
* 🔄 REST API integration

## 🛠️ Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling and responsive design
* **JavaScript** – Application logic and DOM manipulation
* **REST API** – Fetching country data
* **URLSearchParams** – Passing data between pages
* **Local Storage** – Maintaining theme preferences

## 🏗️ Project Structure

```text
Rest-api/
│
├── index.html          # Main country listing page
├── style.css           # Main page styling
├── script.js           # API calls, search and filtering
│
├── countryInfo.html    # Country details page
├── countryInfo.css     # Country details styling
├── countryInfo.js      # Country details logic
│
└── theme.js            # Light/Dark mode functionality
```

## 🔄 How It Works

The application follows a simple frontend data-flow architecture:

```text
        REST API
           │
           ▼
    JavaScript Fetch
           │
           ▼
     Process JSON Data
           │
           ▼
     Dynamic DOM Update
           │
           ▼
       User Interface
```

When a user searches or filters countries, JavaScript processes the available country data and updates the displayed cards dynamically.

When a country is selected, relevant information is passed to the country details page using URL parameters.

## 🧠 What I Am Learning

This project is more than just a frontend project. I am using it to understand how real applications are structured.

### Frontend Architecture

I am currently learning:

* DOM manipulation
* API integration
* JavaScript application structure
* Event handling
* Data processing
* Search and filtering
* URL-based navigation
* State persistence
* Light/Dark theme architecture
* Responsive UI development

### Backend Architecture

I am also beginning to learn how backend systems work and how they connect with frontend applications.

My current learning goals include:

* REST API architecture
* Client-server communication
* Backend routing
* Request and response handling
* Authentication and authorization
* Database integration
* API security
* Separation of frontend and backend responsibilities

## 🎯 Learning Goal

My goal is to progress from building frontend applications that consume existing APIs to designing applications with my own backend services.

The architecture I am working toward is:

```text
             Frontend
        HTML / CSS / JS
               │
               ▼
             API
               │
               ▼
            Backend
               │
               ▼
            Database
```

I am gradually learning how each layer communicates with the others and how to build applications that are easier to maintain, scale, and secure.

## 📚 Current Status

🟢 **Frontend:** Beginner → Intermediate
🟡 **REST APIs:** Learning
🟡 **Backend Architecture:** Currently Learning
🟡 **Database Architecture:** Learning
🟡 **Authentication & Security:** Learning

This repository represents my learning progress and experimentation with web application architecture.

## 🔮 Future Improvements

Some improvements I plan to explore:

* [ ] Build my own backend API
* [ ] Add database integration
* [ ] Add authentication
* [ ] Improve API error handling
* [ ] Add loading states
* [ ] Improve application architecture
* [ ] Separate frontend and backend into independent services
* [ ] Deploy the backend
* [ ] Improve API security

## 👨‍💻 About Me

Hi, I'm **Sujit Kushwaha**, a developer interested in **Web Development, Backend Development, AI/ML, and Software Architecture**.

I am currently improving my skills by building projects and learning how different parts of a modern web application communicate with each other.

> **Learning by building, improving by experimenting. 🚀**

## ⭐ Feedback

If you have suggestions or improvements for this project, feel free to open an issue or submit a pull request.

---

⭐ If you find this project useful or interesting, consider giving the repository a star!
