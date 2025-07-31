# Milady - Contraceptive Pill Tracker

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a React-based contraceptive pill tracker with a pink, cutesy fashion-style UI. The application helps users track their pill intake and menstrual cycles with beautiful animations and a user-friendly interface.

## Architecture
- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS with custom pink/rose color palette
- **Animations**: Framer Motion for smooth, cute animations
- **Routing**: React Router for navigation
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Backend**: Node.js + Express + MySQL + Sequelize

## Code Style Guidelines
- Use TypeScript for all new components
- Follow the pink/cutesy design theme with emojis and animations
- Use Framer Motion for all animations
- Prefer functional components with hooks
- Use TailwindCSS utility classes for styling
- Add cute emojis and friendly language in UI text
- Use custom classes: `pink-gradient`, `rose-gradient`, `cute-shadow`

## Color Palette
- Primary: Pink (50-950 scale)
- Secondary: Rose (50-950 scale)
- Accent: Purple (for variety)
- Background: Light pink gradients
- Text: Gray scale

## Component Patterns
- All pages should use `motion.div` for animations
- Use `initial`, `animate`, and `transition` props
- Include cute decorative elements (hearts, sparkles, etc.)
- Forms should have proper validation and cute styling
- Use rounded corners (`rounded-xl`, `rounded-3xl`)
- Add hover effects with `whileHover`

## Backend Patterns
- Use Sequelize models with proper TypeScript interfaces
- Include comprehensive validation with Joi
- Use JWT for authentication
- Follow RESTful API conventions
- Include proper error handling and logging

## Database Schema
- Users table with authentication
- UserProfile for onboarding data
- PillType for different contraceptive types
- UserPill for user's active pill regimen
- PillIntake for tracking individual doses
- MenstrualCycle for period tracking

## Features to Implement
- User authentication (login/register)
- Onboarding questionnaire
- Interactive calendar with pill/cycle tracking
- Cute animated reminders
- Pill schedule management
- Cycle prediction
- Side effects tracking
- Privacy-focused design
