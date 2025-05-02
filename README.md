# 🗞️ The Nahid Times

> A dynamic and modern news platform built with React, Vite, and Firebase. Stay informed with categorized news, real-time updates, and a smooth user experience.

🌐 **Live Demo**: [https://the-nahid-times.netlify.app/category/01](https://the-nahid-times.netlify.app/category/01)

---

## 📑 Table of Contents

* [Introduction](#introduction)
* [Live Demo](#live-demo)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)
* [Dependencies](#dependencies)
* [Development](#development)
* [Examples](#examples)
* [Troubleshooting](#troubleshooting)
* [Contributors](#contributors)
* [License](#license)

---

## 🧭 Introduction

**The Nahid Times** is a news-centric web application delivering organized, categorized, and updated news content to users. Built with React, it emphasizes performance, user experience, and responsive design.

---

## 🌐 Live Demo

Check out the live platform:
👉 [https://the-nahid-times.netlify.app/category/01](https://the-nahid-times.netlify.app/category/01)

---

## ✨ Features

* 📰 Categorized and filtered news content
* 🕒 Timestamping and formatting with `moment.js`
* 🚀 Fast marquee scrolling news highlights
* 🔔 Toast notifications for feedback
* 🔥 Firebase integration for real-time updates
* 🎨 Custom theming with `styled-components` and Tailwind CSS
* 💾 Offline persistence via localForage

---

## 🛠️ Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/your-username/the-nahid-times.git
cd the-nahid-times
npm install
```

---

## 🚀 Usage

### Development Server

```bash
npm run dev
```

This starts the local dev server at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Configuration

Set up Firebase and environment variables in a `.env` file like:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
...
```

---

## 📦 Dependencies

### Core Dependencies

* `react`, `react-dom`, `react-router-dom`
* `firebase`, `moment`
* `react-fast-marquee`, `react-hot-toast`, `react-icons`
* `localforage`, `match-sorter`, `sort-by`
* `styled-components`

### Dev Tools

* `vite`, `@vitejs/plugin-react`
* `eslint`, React ESLint plugins
* `tailwindcss`, `daisyui`, `postcss`, `autoprefixer`

---

## 👨‍💻 Development

Use ESLint to check for code issues:

```bash
npm run lint
```

---

## 💡 Examples

To browse news categories:

1. Go to the [Live Demo](https://the-nahid-times.netlify.app/category/01)
2. Use the navigation bar to switch categories.
3. Click on articles to view full details and timestamps.

---

## 🧰 Troubleshooting

* **Firebase errors?** Check `.env` file for valid credentials.
* **Blank content?** Ensure categories are correctly populated in Firebase.
* **CSS issues?** Verify Tailwind and DaisyUI config is not overwritten.

---

## 👥 Contributors

* **Your Name** – [@yourusername](https://github.com/yourusername)

---

## 📝 License

This project is private. Please contact the maintainer for access or licensing inquiries.

