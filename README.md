# 💖 Milady - Contraceptive Pill Tracker

A beautiful, user-friendly React-based web application for tracking contraceptive pill intake and menstrual cycles. Designed with a pink, cutesy fashion-style UI that makes health tracking enjoyable and empowering.

## ✨ Features

- 🌸 **Beautiful Pink UI** - Fashion-inspired design with cute animations
- 📅 **Smart Calendar** - Visual tracking of pill schedules and menstrual cycles
- 🔔 **Cute Reminders** - Gentle, customizable notifications
- 🔒 **Privacy First** - Encrypted and secure health data
- 💝 **Personalized** - Tailored to your specific contraceptive type
- 📱 **Mobile Friendly** - Responsive design for all devices

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** with TypeScript
- 🎨 **TailwindCSS** for styling
- ✨ **Framer Motion** for animations
- 🧭 **React Router** for navigation
- 📋 **React Hook Form** + Zod for forms
- 🎯 **Axios** for API calls
- 🎭 **Lucide React** for icons

### Backend
- 🚀 **Node.js** + Express.js
- 🗃️ **MySQL** database
- 🔄 **Sequelize** ORM with migrations
- 🔐 **JWT** authentication
- 🛡️ **Helmet** + CORS for security
- ✅ **Joi** for validation

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
