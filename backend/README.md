# Milady Backend API

<div align="center">
  
![Node.js](https://img.shields.io/badge/Node.js-v16+-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-v4.18-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-v8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.35-52B0E7?style=flat-square&logo=sequelize&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

## 📋 Overview

The Milady Backend API is a comprehensive RESTful service designed to support contraceptive pill tracking and menstrual cycle monitoring. Built with Node.js, Express, and MySQL, it provides secure and scalable endpoints for health data management.

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication with refresh tokens
- Password hashing with bcryptjs
- Rate limiting and security headers
- Input validation and sanitization
- CORS configuration for frontend integration

### 💊 Pill Management
- Track multiple contraceptive pills
- Customizable reminder schedules
- Intake logging with timestamps
- Side effects and mood tracking
- Pill adherence statistics

### 🩸 Cycle Tracking
- Menstrual cycle monitoring
- Phase prediction (menstrual, follicular, ovulation, luteal)
- Symptom and mood logging
- Flow intensity tracking
- Cycle analytics and insights

### 📊 Health Insights
- Dashboard statistics
- Adherence trends
- Cycle predictions
- Health pattern analysis
- Personalized recommendations

### 🔄 Data Management
- Database migrations with Sequelize
- Comprehensive data models
- Automated backups (production)
- Data export capabilities

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **MySQL** (v8.0 or higher)
- **npm** (v7 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/milady-team/milady-backend.git
   cd milady-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**
   ```bash
   # Create database
   npm run db:create
   
   # Run migrations
   npm run migrate
   
   # (Optional) Seed with sample data
   npm run seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3001`

## 🗄️ Database Schema

### Core Tables

#### Users
- Personal information and preferences
- Authentication credentials
- Timezone and notification settings
- Profile customization options

#### Pills
- Contraceptive pill details
- Dosage and timing information
- Prescription tracking
- Active/inactive status

#### Pill Intakes
- Daily intake logging
- Timing accuracy tracking
- Side effects recording
- Mood and symptom correlation

#### Cycles
- Menstrual cycle periods
- Flow intensity and duration
- Symptom tracking
- Cycle completion status

#### Cycle Days
- Daily health data
- Phase identification
- Temperature and weight tracking
- Detailed symptom logging

## 🛣️ API Endpoints

### Authentication
```
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/logout       # User logout
GET    /api/auth/me           # Get current user
```

### User Management
```
GET    /api/users/profile     # Get user profile
PUT    /api/users/profile     # Update user profile
PUT    /api/users/preferences # Update preferences
```

### Pill Management
```
GET    /api/pills             # Get user's pills
POST   /api/pills             # Add new pill
GET    /api/pills/:id         # Get pill details
PUT    /api/pills/:id         # Update pill
DELETE /api/pills/:id         # Delete pill
```

### Intake Tracking
```
GET    /api/intakes           # Get intake history
POST   /api/intakes           # Log pill intake
PUT    /api/intakes/:id       # Update intake
GET    /api/intakes/today     # Today's intakes
GET    /api/intakes/stats     # Intake statistics
```

### Cycle Management
```
GET    /api/cycles            # Get cycle history
POST   /api/cycles            # Start new cycle
GET    /api/cycles/current    # Current cycle
GET    /api/cycles/:id/days   # Get cycle days
POST   /api/cycles/days       # Log cycle day
GET    /api/cycles/predictions # Get predictions
```

### Dashboard
```
GET    /api/dashboard/stats   # Dashboard statistics
GET    /api/dashboard/today   # Today's summary
GET    /api/dashboard/recent-activity # Recent activity
GET    /api/dashboard/insights # Health insights
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `3306` |
| `DB_NAME` | Database name | `milady_db` |
| `DB_USER` | Database username | `root` |
| `DB_PASSWORD` | Database password | _(empty)_ |
| `PORT` | Server port | `3001` |
| `JWT_SECRET` | JWT signing secret | _(required)_ |
| `JWT_EXPIRES_IN` | JWT expiration | `7d` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

### Security Configuration

```env
# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-this-in-production
JWT_REFRESH_EXPIRES_IN=30d

# Security Settings
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📦 Database Management

### Migrations

```bash
# Run migrations
npm run migrate

# Undo last migration
npm run migrate:undo

# Create new migration
npx sequelize-cli migration:generate --name migration-name
```

### Seeding

```bash
# Run all seeders
npm run seed

# Undo all seeders
npm run seed:undo

# Create new seeder
npx sequelize-cli seed:generate --name seeder-name
```

## 🚢 Deployment

### Production Setup

1. **Environment Configuration**
   ```bash
   NODE_ENV=production
   DB_SSL=true
   JWT_SECRET=your-production-secret
   ```

2. **Database Migration**
   ```bash
   npm run migrate
   ```

3. **Start Production Server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

## 📊 Monitoring & Logging

### Health Check
```
GET /health
```

Returns server status, uptime, and environment information.

### Logging Levels
- `error` - Error conditions
- `warn` - Warning conditions
- `info` - Informational messages
- `debug` - Debug messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint configuration
- Write tests for new features
- Update documentation
- Use conventional commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Express.js](https://expressjs.com/)
- Database management with [Sequelize](https://sequelize.org/)
- Authentication with [JWT](https://jwt.io/)
- Security middleware from [Helmet](https://helmetjs.github.io/)

## 📞 Support

For support, please contact:
- Email: support@milady.app
- GitHub Issues: [Create an issue](https://github.com/milady-team/milady-backend/issues)
- Documentation: [API Docs](https://docs.milady.app)

---

<div align="center">
  Made with ❤️ by the Milady Team
</div>
