<div align="center">

# 🌍 Travora

### A modern travel & tour booking platform built with React

*Your Journey, Your Story — choose your favourite destination.*

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

</div>

---

## 📖 Overview

**Travora** is a responsive front-end web application for a travel and tour agency. It showcases popular destinations, recent trips, and services through a clean, modern UI, and includes contact and sign-up pages for capturing visitor interest.

The project is built as a single-page application using **React 19** and **React Router**, styled entirely with **Tailwind CSS**, and bundled with **Vite** for a fast development experience.

> **Note:** This is currently a front-end showcase. The contact and sign-up forms render on the client and are not yet wired to a backend or API.

## ✨ Features

- **Fully responsive design** — adapts from desktop down to mobile, with a collapsible hamburger menu under 850px
- **Client-side routing** — smooth navigation across five pages with no full-page reloads (React Router v7)
- **Reusable Hero component** — a fully prop-driven banner reused across pages with per-page styling
- **Destination showcase** — highlighted destinations with alternating text/image layouts
- **Recent trips section** — tour cards for featured trip packages
- **Contact form** — name, email, subject, and message fields
- **Sign-up page** — a styled account-creation form with a two-column layout
- **Font Awesome icons** — loaded via CDN for navigation and UI accents
- **Consistent theming** — teal accent (`#01959a`) throughout the interface

## 🧭 Pages & Routes

| Route         | Page       | Description                                                        |
| ------------- | ---------- | ----------------------------------------------------------------- |
| `/`           | Home       | Hero banner, popular destinations, recent trips, and footer       |
| `/about`      | About      | About-us section introducing the platform                         |
| `/services`   | Services   | Featured trip packages (Indonesia, Malaysia, France)              |
| `/contact`    | Contact    | Contact form for sending messages                                 |
| `/signup`     | Sign Up    | Account creation form                                             |

## 🛠️ Tech Stack

| Category         | Technology                          |
| ---------------- | ----------------------------------- |
| **Framework**    | React 19                            |
| **Build Tool**   | Vite 8                              |
| **Routing**      | React Router DOM 7                  |
| **Styling**      | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Icons**        | Font Awesome 7 (CDN)                |
| **Linting**      | ESLint 10 (with React Hooks & Refresh plugins) |
| **Language**     | JavaScript (JSX)                    |

## 📁 Project Structure

```
travora/
├── public/                  # Static assets served as-is
├── src/
│   ├── assets/              # Images used across the site (destinations, hero, etc.)
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Responsive navigation bar with mobile menu
│   │   ├── Hero.jsx         # Prop-driven hero banner
│   │   ├── DestinationCard.jsx
│   │   ├── Tour.jsx         # "Recent Trips" section wrapper
│   │   ├── TourCard.jsx     # Individual trip card
│   │   ├── AboutUs.jsx
│   │   ├── ContactForm.jsx
│   │   ├── SignupForm.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Route-level page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── SignUp.jsx
│   ├── App.jsx              # Root component & route definitions
│   ├── main.jsx             # App entry point (BrowserRouter)
│   ├── App.css
│   └── index.css
├── index.html               # HTML template
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (bundled with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rafayykhan/travora.git
   cd travora
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

## 📜 Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite development server with HMR        |
| `npm run build`   | Build the app for production into `dist/`         |
| `npm run preview` | Preview the production build locally              |
| `npm run lint`    | Run ESLint across the project                     |

## 🗺️ Roadmap

Potential next steps to grow Travora into a full booking platform:

- [ ] Wire the contact and sign-up forms to a backend / email service
- [ ] Add authentication and user accounts
- [ ] Build a real booking flow with a database of tours and availability
- [ ] Add search and filtering for destinations
- [ ] Integrate a payment gateway

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muhammad Abdul Rafay Khan**
GitHub: [@rafayykhan](https://github.com/rafayykhan)

---

<div align="center">

*Built with React + Vite ⚡*

</div>
