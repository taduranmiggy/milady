import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireOnboarding?: boolean;
}

const ProtectedRoute = ({ children, requireOnboarding = false }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto">
            <img 
              src="/eepycapy.png" 
              alt="Loading capybara"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Loading your zen space...</h2>
            <p className="text-gray-600">Your capybara friend is preparing everything 🌸</p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect to onboarding if user hasn't completed it and it's required
  if (requireOnboarding && !user.hasCompletedOnboarding) {
    return <Navigate to="/onboarding" replace />;
  }

  // Render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
