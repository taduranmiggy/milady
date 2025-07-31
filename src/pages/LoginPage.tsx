import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

const LoginPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const animationVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.1
        }
      }
    },
    item: {
      hidden: { y: shouldReduceMotion ? 0 : 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: shouldReduceMotion ? 0.1 : 0.4 }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={animationVariants.container}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <motion.div variants={animationVariants.item} className="text-center">
          <motion.div
            className="mx-auto w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          >
            <img 
              src="/welcomecapybara.png" 
              alt="Welcome capybara"
              className="w-12 h-12 object-contain"
            />
          </motion.div>
          <h1 className="mt-6 heading-lg text-gradient-primary">
            Welcome back, friend! 🌸
          </h1>
          <p className="mt-2 text-body-md text-emphasized">
            Your capybara wellness community is waiting for you
          </p>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Form */}
        <motion.div variants={animationVariants.item}>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-body-sm text-emphasized mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field pl-10"
                    placeholder="Enter your email"
                    aria-describedby="email-description"
                  />
                </div>
                <p id="email-description" className="sr-only">
                  Enter the email address associated with your account
                </p>
              </div>

              <div>
                <label htmlFor="password" className="block text-body-sm text-emphasized mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pl-10 pr-10"
                    placeholder="Enter your password"
                    aria-describedby="password-description"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                <p id="password-description" className="sr-only">
                  Enter your account password
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-body-sm text-emphasized">
                  Remember me
                </label>
              </div>

              <div className="text-body-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-pink-600 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isLoading}
                shimmer={!isLoading}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                fullWidth
                className="group"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-body-sm text-emphasized">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-medium text-pink-600 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div variants={animationVariants.item} className="text-center">
          <p className="text-caption text-emphasized">
            By signing in, you agree to our{' '}
            <Link to="/privacy" className="text-pink-600 hover:text-pink-500 underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-pink-600 hover:text-pink-500 underline">
              Terms of Service
            </Link>
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 -left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl"
            animate={shouldReduceMotion ? {} : { y: [-10, 10, -10] }}
            transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-10 w-32 h-32 bg-rose-200/20 rounded-full blur-xl"
            animate={shouldReduceMotion ? {} : { y: [10, -10, 10] }}
            transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
