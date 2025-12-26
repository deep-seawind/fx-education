# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── videos/
│   └── logos/
│
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── SectionHeader.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   └── PageWrapper.jsx
│   │
│   ├── breadcrumb/
│   │   ├── Breadcrumb.jsx
│   │   ├── BreadcrumbItem.jsx
│   │   └── useBreadcrumb.js
│   │
│   ├── charts/
│   │   ├── TradingViewChart.jsx
│   │   ├── MiniChart.jsx
│   │   └── MarketDepth.jsx
│   │
│   └── forms/
│       ├── ContactForm.jsx
│       ├── LoginForm.jsx
│       └── SignupForm.jsx
│
├── pages/
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Programs.jsx
│   │   ├── LiveMarkets.jsx
│   │   ├── Testimonials.jsx
│   │   └── CTA.jsx
│   │
│   ├── about/
│   │   ├── About.jsx
│   │   ├── AboutHero.jsx
│   │   ├── OurMission.jsx
│   │   ├── OurStory.jsx
│   │   ├── OurTeam.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── CompanyValues.jsx
│   │
│   ├── courses/
│   │   ├── Courses.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseDetails.jsx
│   │   └── CourseFilter.jsx
│   │
│   ├── how-it-works/
│   │   ├── HowItWorks.jsx
│   │   ├── Steps.jsx
│   │   └── ProcessFlow.jsx
│   │
│   ├── trading-practice/
│   │   ├── TradingPractice.jsx
│   │   ├── Simulator.jsx
│   │   ├── BuySellPanel.jsx
│   │   └── PerformanceStats.jsx
│   │
│   ├── certifications/
│   │   ├── Certifications.jsx
│   │   ├── CertificationLevels.jsx
│   │   └── CertificationDetails.jsx
│   │
│   ├── careers/
│   │   ├── Careers.jsx
│   │   ├── OpenPositions.jsx
│   │   └── PlacementSupport.jsx
│   │
│   ├── blog/
│   │   ├── Blog.jsx                # Blog listing page
│   │   ├── BlogCard.jsx            # Blog preview card
│   │   ├── BlogDetails.jsx         # Single blog post page
│   │   ├── BlogSidebar.jsx         # Categories, tags, search
│   │   ├── BlogCategories.jsx
│   │   ├── BlogTags.jsx
│   │   └── RecentPosts.jsx
│   │
│   ├── contact/
│   │   ├── Contact.jsx
│   │   ├── ContactInfo.jsx
│   │   └── ContactMap.jsx

│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── ForgotPassword.jsx
│   │
│   └── not-found/
│       └── NotFound.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
│
├── context/
│   ├── AuthContext.jsx
│   ├── UserContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useScrollTop.js
│   └── useWindowSize.js
│
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── courseService.js
│   └── marketService.js
│
├── utils/
│   ├── constants.js
│   ├── formatPrice.js
│   └── validators.js
│
├── styles/
│   ├── globals.css
│   └── tailwind.css
│
├── App.jsx
├── main.jsx
└── index.css
