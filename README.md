# SolvixAI Tech — React Website

Modern React website for SolvixAI Tech built with Vite + React Router.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with mobile hamburger
│   ├── Footer.jsx        # 4-column dark footer
│   ├── ServiceCard.jsx   # Reusable service card
│   └── BlogCard.jsx      # Reusable blog card
├── hooks/
│   └── useScrollReveal.js # Intersection Observer scroll animations
├── pages/
│   ├── Home.jsx          # Homepage with all sections
│   ├── Services.jsx      # Detailed services page
│   ├── About.jsx         # Founders & company story
│   ├── Blog.jsx          # Blog grid with category filter
│   └── Contact.jsx       # Contact form & FAQ
├── styles/
│   └── style.css         # All styles & design tokens
├── App.jsx               # Router setup
└── main.jsx              # Entry point
```

## 📱 Pages & Routes

| Route       | Page     |
|-------------|----------|
| `/`         | Home     |
| `/services` | Services |
| `/about`    | About    |
| `/blog`     | Blog     |
| `/contact`  | Contact  |

## 🎨 Design System

- **Primary Font:** Fraunces (display/headings)
- **Body Font:** Outfit
- **Primary Color:** `#2351E5` (Blue)
- **Secondary Color:** `#7B2FF7` (Purple)
- **Gradient:** `135deg, #2351E5 → #7B2FF7`

## ✨ Features

- React Router v6 with scroll-to-top on navigation
- Intersection Observer scroll reveal animations
- Mobile responsive with hamburger menu
- Blog category filter (live JavaScript filtering)
- Contact form with success state
- FAQ accordion
- Newsletter subscription
- Reusable components: ServiceCard, BlogCard

## 🛠 Build for Production

```bash
npm run build
npm run preview
```

---

**SolvixAI Tech** · Smart Design. Powerful Development. Intelligent Automation.
