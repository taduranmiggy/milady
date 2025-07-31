# 🌸 Milady Onboarding System Documentation

## Overview
The Milady app now features a comprehensive 6-step onboarding questionnaire that collects important user information to personalize the contraceptive pill tracking and menstrual cycle monitoring experience.

## How It Works

### 1. User Registration Flow
```
Register → Onboarding (6 steps) → Dashboard
```

- When a user creates a new account, they're automatically redirected to `/onboarding`
- New users have `hasCompletedOnboarding: false` by default
- The system uses ProtectedRoute to enforce onboarding completion

### 2. Login Flow for Existing Users
```
Login → Dashboard (if onboarding completed)
Login → Onboarding (if not completed)
```

- Existing users who haven't completed onboarding are redirected to continue setup
- Users with completed onboarding go directly to dashboard

### 3. Onboarding Steps

#### Step 1: Personal Information 💕
- **Nickname**: What the user wants to be called (e.g., "Diane", "Lady D")
- Used throughout the app for personalization

#### Step 2: Contraceptive Information 💊
- **Pill Type**: Combined/Mini/Extended/Need advice
- **Preferred Time**: When to take daily pills (default: 08:00)
- Used for smart reminders and tracking

#### Step 3: Menstrual Cycle Data 🌺
- **Last Period Date**: Start date of last menstrual cycle
- **Cycle Length**: Average cycle length (21-40 days)
- **Cycle Regularity**: Regular/Irregular/Not sure
- Used for cycle predictions and calendar

#### Step 4: Previous Contraception 📋
- **Previous Method**: What they used before (optional)
- Used for better tracking context

#### Step 5: Health Considerations 🏥
- **Health Conditions**: PCOS, Endometriosis, etc. (multi-select)
- Used for personalized tracking and insights

#### Step 6: Health Goals 🎯
- **Goals**: Prevent pregnancy, regulate cycle, etc. (multi-select)
- Used to customize features and recommendations

### 4. Data Storage Structure
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  nickname?: string;
  hasCompletedOnboarding: boolean;
  onboardingData?: {
    nickname: string;
    pillType: string;
    pillTime: string;
    cycleLength: number;
    lastPeriodDate: string;
    cycleRegularity: 'regular' | 'irregular' | 'not-sure';
    previousContraception: string;
    healthConditions: string[];
    goals: string[];
  };
}
```

### 5. Personalization Features

#### Dashboard Greeting
- Uses `user.nickname` or `user.onboardingData.nickname` instead of hardcoded "Sarah"
- Example: "Good morning, Diane! 🌸"

#### Algorithm Customization
- Cycle length and regularity inform period predictions
- Health conditions customize tracking options
- Goals determine which features to highlight

#### Smart Reminders
- Pill time sets daily notification schedule
- Pill type influences reminder content

## Technical Implementation

### Protected Routes
```typescript
// Dashboard requires completed onboarding
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute requireOnboarding>
      <DashboardPage />
    </ProtectedRoute>
  } 
/>
```

### Form Validation
- Step 1: Nickname required
- Step 2: Pill type required
- Step 3: Last period date required, cycle length 21-40 days
- Steps 4-6: Optional but recommended

### Progressive Enhancement
- Each step builds on previous information
- Users can go back to edit previous steps
- Progress bar shows completion status

## Capybara Integration 🦫
Each step features different capybara companions:
- Step 1: Cute capybara (welcome)
- Step 2: Smart capybara (pill info)
- Step 3: Flower capybara (cycle)
- Step 4: Book capybara (history)
- Step 5: Sleepy capybara (health)
- Step 6: Ribbon capybara (goals)

## Future Enhancements
- [ ] Onboarding analytics
- [ ] Skip optional steps option
- [ ] Edit onboarding data later
- [ ] Import data from other apps
- [ ] Multi-language support
- [ ] Accessibility improvements

## Testing the System

### New User Flow
1. Go to `/register`
2. Create account → redirected to `/onboarding`
3. Complete 6 steps → redirected to `/dashboard`
4. Dashboard shows personalized greeting

### Existing User Flow
1. Go to `/login`
2. Login → checks `hasCompletedOnboarding`
3. If false → redirected to `/onboarding`
4. If true → redirected to `/dashboard`

### Reset Onboarding (for testing)
```javascript
// In browser console
localStorage.removeItem('milady_user');
localStorage.removeItem('milady_token');
```

The system creates a much more personalized and informed experience for tracking contraceptive pills and menstrual cycles, exactly what Lady Diane needs! 🌸
