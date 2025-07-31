# 💖 Milady - Contraceptive Pill Tracker

> *Your trusted companion for contraceptive health tracking* 🌸

A beautiful, user-friendly React-based web application for tracking contraceptive pill intake and menstrual cycles. Designed with a pink, cutesy fashion-style UI that makes health tracking enjoyable and empowering. Built with accessibility, privacy, and user experience as top priorities.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql)](https://www.mysql.com/)

## ✨ Features

### 🎨 **User Experience**
- 🌸 **Beautiful Pink UI** - Fashion-inspired design with cute animations and accessibility features
- � **Mobile First** - Responsive design that works perfectly on all devices
- ♿ **Accessibility** - WCAG 2.1 compliant with screen reader support and reduced motion options
- 🌙 **Dark Mode Ready** - Coming soon with system preference detection

### 📊 **Health Tracking**
- �📅 **Smart Calendar** - Visual tracking of pill schedules and menstrual cycles with predictions
- � **Multi-Pill Support** - Track different types of contraceptives (combination, progestin-only, etc.)
- 📈 **Cycle Analytics** - Detailed insights and pattern recognition for your menstrual cycle
- 🔔 **Intelligent Reminders** - Gentle, customizable notifications that adapt to your schedule

### 🔐 **Privacy & Security**
- 🔒 **Privacy First** - End-to-end encrypted health data with zero-knowledge architecture
- 🛡️ **HIPAA Compliant** - Medical-grade security and data protection
- 🚫 **No Data Selling** - Your health data is never shared or monetized
- � **Offline Support** - Core features work offline with automatic sync

### 🎯 **Personalization**
- �💝 **Personalized Experience** - Tailored to your specific contraceptive type and preferences
- 🎨 **Customizable Themes** - Multiple color schemes and cute avatar options
- 🌐 **Multi-Language** - Support for English, Spanish, French, and more
- 📊 **Export Reports** - Generate PDF reports for healthcare providers

## 🛠️ Tech Stack

### Frontend Architecture
- ⚛️ **React 18** - Latest React with Concurrent Features and Suspense
- 📘 **TypeScript 5.0** - Full type safety and enhanced developer experience
- 🎨 **TailwindCSS 3.3** - Utility-first CSS framework with custom design system
- ✨ **Framer Motion 10** - Production-ready motion library for React
- 🧭 **React Router 6** - Declarative routing with data loading
- 📋 **React Hook Form** - Performant forms with easy validation
- 🔍 **Zod** - TypeScript-first schema validation
- 🎯 **Axios** - Promise-based HTTP client with interceptors
- 🎭 **Lucide React** - Beautiful & customizable SVG icons
- 🧪 **Vitest** - Fast unit testing powered by Vite

### Backend Infrastructure
- 🚀 **Node.js 18** - JavaScript runtime with ES modules
- ⚡ **Express.js 4** - Fast, unopinionated web framework
- 🗃️ **MySQL 8.0** - Robust relational database with JSON support
- 🔄 **Sequelize 6** - Promise-based ORM with TypeScript support
- 🔐 **JWT + Refresh Tokens** - Secure authentication with token rotation
- 🛡️ **Helmet** - Security middleware for Express
- 🌐 **CORS** - Cross-origin resource sharing configuration
- ✅ **Joi** - Object schema validation for APIs
- 📧 **Nodemailer** - Email sending for notifications
- 🔒 **bcryptjs** - Password hashing with salt rounds

### DevOps & Tools
- ⚡ **Vite** - Next generation frontend build tool
- 🐳 **Docker** - Containerization for consistent environments
- 🔧 **ESLint + Prettier** - Code linting and formatting
- 🚀 **GitHub Actions** - CI/CD pipeline automation
- 📊 **Winston** - Professional logging library
- 🔍 **Morgan** - HTTP request logger middleware

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MySQL 8.0+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd milady
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # In backend directory
   cp .env.example .env
   # Edit .env with your MySQL credentials
   ```

5. **Set up the database**
   ```bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE milady_tracker;
   
   # Run migrations (coming soon)
   npm run db:migrate
   ```

### Development

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   # In root directory
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
milady/
├── src/                    # Frontend source code
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utility functions
│   └── types/             # TypeScript types
├── backend/               # Backend source code
│   ├── src/
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   └── utils/         # Backend utilities
│   └── config/            # Database configuration
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary Pink**: `#ec4899` (pink-500)
- **Light Pink**: `#fdf2f8` (pink-50)
- **Rose**: `#f43f5e` (rose-500)
- **Background**: Linear gradients with pink tones

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Comic Neue (friendly sans-serif)

### Components
- Rounded corners (`rounded-xl`, `rounded-3xl`)
- Soft shadows (`cute-shadow` class)
- Hover animations with Framer Motion
- Pink gradient buttons
- Animated icons and emojis

## 🗃️ Database Schema

### Core Tables
- `users` - User authentication and basic info
- `user_profiles` - Onboarding data and preferences
- `pill_types` - Different contraceptive medications
- `user_pills` - User's active pill regimens
- `pill_intakes` - Individual pill intake records
- `menstrual_cycles` - Period and cycle tracking

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Additional endpoints coming soon...

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests (when available)
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 💌 Support

For support, please contact us at support@milady-app.com or create an issue on GitHub.

---

Made with 💖 by the Milady team
