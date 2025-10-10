# HERO.IO - Modern App Store Interface

A responsive and feature-rich web application that simulates an app store, built with modern **React** and **React Router**.  
This project demonstrates advanced front-end concepts including dynamic routing, data fetching, global state management for loading, and client-side state persistence with **localStorage**.

**Live Demo:** [Live Preview](https://app-store-front-end.vercel.app/)

---

## Features

This application is packed with features that create a complete and seamless user experience:

- **Dynamic Routing:** A multi-page application experience built with React Router, including dynamic routes for app details and a custom 404 error page.  
- **Homepage:** A welcoming landing page that showcases trending apps and key statistics.  
- **All Apps Page:** A comprehensive list of all available applications, complete with:  
  - **Live Search:** Instantly filter apps by title with a case-insensitive search.  
  - **Not Found State:** A clear message is displayed when no search results are found.  
- **App Details Page:** A detailed view for each application, featuring complete app information such as downloads, reviews, and size, along with a responsive ratings chart built with **Recharts**.  
- **App Installation Simulation:**  
  - Install any app with a single click.  
  - The install button becomes disabled and updates its text to **Installed** to provide clear feedback.  
  - User-friendly success notifications are provided by **SweetAlert2**.  
- **Client-Side Persistence:** All installed apps are saved to the browser's **localStorage**, so the user's list persists between sessions.  
- **Installations Page:**  
  - View and manage all installed applications.  
  - Uninstall apps, which removes them from both the UI and localStorage.  
  - Sort installed apps by download count (High-to-Low and Low-to-High).  
- **Global Loading State:** A clean, full-page loading animation is displayed during page navigation and data fetching, powered by the **useNavigation** hook from React Router.

---

## Technologies Used

This project was built using a modern front-end stack:

- **Core:** React.js  
- **Routing & Data Loading:** React Router DOM v6+  
- **Styling:** CSS3 & Styled Components  
- **Data Visualization:** Recharts  
- **Notifications:** SweetAlert2  
- **Build Tool:** Vite  

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- **Node.js** (which includes npm)

### Installation & Setup

1. **Clone the repository:**  
   **git clone https://github.com/Tahmied/App-Store-Front-end**

2. **Navigate to the project directory:**  
   **cd App-Store-Front-end**

3. **Install NPM packages:**  
   **npm install**

4. **Run the development server:**  
   **npm run dev**

5. The application will be available at **http://localhost:5173** (or another port if 5173 is in use).

---

## Key Implementation Details

This project goes beyond the basics to implement modern, efficient patterns for building React applications.

### 1. Data Fetching with React Router Loaders

Instead of fetching data within components using useEffect, this project leverages **React Router's loader functions**.  
This approach ensures that data for a route is fetched before the component renders, preventing loading spinners from appearing inside a partially rendered layout.

Example from **App.jsx:**  
Data is fetched in the route configuration using a **loader** function.

### 2. Global Loading State with useNavigation

To provide a seamless user experience, a global loading indicator is managed by the **useNavigation** hook.  
By checking **navigation.state = loading**, the application can display a full-page loader during route transitions, giving the user immediate feedback.

This results in a smooth, app-like browsing experience.

---

## Contact

**Author:** Tahmied Hossain  
**Email:** tahmiedhossain4671@gmail.com  
**Project Link:** [https://github.com/Tahmied/App-Store-Front-end](https://github.com/Tahmied/App-Store-Front-end)  
**Live Link:** [https://app-store-front-end.vercel.app](https://app-store-front-end.vercel.app)
