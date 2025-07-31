import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  PlayCircle,
  Shield,
  Award,
  Globe,
  Heart,
  Calendar,
  Bell,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating Capybaras for Lady Diane */}
        <div className="absolute top-20 left-10 float-animation">
          <img src="/cutesycapy.png" alt="Floating cute capybara" className="w-12 h-12 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: '1s' }}>
          <img src="/flowercapy.png" alt="Floating flower capybara" className="w-10 h-10 opacity-70" />
        </div>
        <div className="absolute bottom-20 left-20 float-animation" style={{ animationDelay: '2s' }}>
          <img src="/eepycapy.png" alt="Floating sleepy capybara" className="w-14 h-14 opacity-70" />
        </div>
        <div className="absolute top-60 left-1/2 float-animation" style={{ animationDelay: '3s' }}>
          <img src="/ribboncapy.png" alt="Floating ribbon capybara" className="w-8 h-8 opacity-60" />
        </div>
        <div className="absolute bottom-40 right-10 float-animation" style={{ animationDelay: '4s' }}>
          <img src="/smartcapy.png" alt="Floating smart capybara" className="w-10 h-10 opacity-70" />
        </div>
        {/* Original decorative elements */}
        <div className="absolute top-32 right-40 text-pink-400 float-animation" style={{ animationDelay: '5s' }}>
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-40 text-rose-400 float-animation" style={{ animationDelay: '6s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 pt-20 pb-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Live User Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center mb-8"
              >
                <div className="bg-pink-50 border-2 border-pink-200 px-4 py-2 rounded-full shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-pink-900">
                      Made with love for Lady Diane Casilang 💕
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-xl mb-6"
              >
                <span className="block text-gradient-primary">
                  Your Zen Health Journey
                </span>
                <span className="block text-gray-900 mt-2">
                  Starts with Capybara Wisdom 🌸
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body-xl text-enhanced-contrast max-w-3xl mx-auto mb-8"
              >
                Transform your wellness routine with AI-powered capybara guidance. 
                Track your health, find inner peace, and discover 
                the art of mindful living.
              </motion.p>

              {/* Hero Capybara */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  <img 
                    src="/welcomecapybara.png" 
                    alt="Lady Diane's capybara friend" 
                    className="w-32 h-32 object-contain drop-shadow-2xl"
                  />
                  <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                    For Diane! 💕
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link to="/register">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="group btn-premium"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group glass-button"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <p className="text-caption text-enhanced-contrast mb-4">Trusted by wellness enthusiasts worldwide</p>
                <div className="flex justify-center items-center gap-8 text-enhanced-contrast">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">Global Community</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mx-auto max-w-4xl mt-16"
          >
            <div className="bg-white pinky-accent-bg border-2 border-pink-200 rounded-3xl shadow-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-3xl"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Demo Cards */}
                {[
                  { icon: Heart, title: "Daily Check-in", desc: "Morning meditation with capy", color: "text-pink-600" },
                  { icon: Calendar, title: "Cycle Tracking", desc: "Gentle reminders & insights", color: "text-rose-600" },
                  { icon: TrendingUp, title: "Wellness Growth", desc: "Track your zen progress", color: "text-purple-600" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="bg-pink-50 border border-pink-200 p-4 rounded-2xl micro-lift shadow-sm"
                  >
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />

        {/* Final CTA Section */}
        <FinalCTASection />
      </div>
    </div>
  );
};

// How It Works Component
const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Tell us about your wellness goals and let your capybara guide choose you",
      icon: Users,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      step: "02", 
      title: "Set Your Intentions",
      description: "Customize your tracking preferences and mindfulness reminders",
      icon: Bell,
      gradient: "from-rose-500 to-purple-500"
    },
    {
      step: "03",
      title: "Begin Your Journey",
      description: "Start tracking, meditating, and growing with your capybara companion",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <span className="text-gradient-primary">How It Works</span>
          </h2>
          <p className="text-body-lg text-gray-800 max-w-2xl mx-auto">
            Three simple steps to transform your wellness journey with capybara wisdom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 z-10"></div>
              )}
              
              <div className="bg-white pinky-accent-bg border-2 border-pink-200 p-8 rounded-3xl shadow-lg micro-lift">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} text-white font-bold text-lg mb-6 micro-bounce`}>
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-pink-600 group-hover:text-rose-600 transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="heading-md mb-4 text-gray-900">{step.title}</h3>
                <p className="text-body-md text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Mindful Tracking",
      description: "Monitor your wellness with gentle, capybara-inspired check-ins",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Calendar,
      title: "Cycle Harmony",
      description: "Track your natural rhythms with AI-powered predictions",
      gradient: "from-rose-500 to-purple-500"
    },
    {
      icon: Bell,
      title: "Zen Reminders",
      description: "Peaceful notifications that nurture your wellness journey",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is protected with enterprise-grade security",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Discover patterns and celebrate your wellness milestones",
      gradient: "from-rose-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Community Love",
      description: "Connect with fellow wellness warriors in our supportive community",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-pink-50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <span className="text-gradient-primary">Features Designed for You</span>
          </h2>
          <p className="text-body-lg text-gray-800 max-w-3xl mx-auto">
            Every feature is crafted with love and capybara wisdom to support your unique wellness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white pinky-accent-bg border-2 border-pink-200 p-8 rounded-3xl shadow-lg micro-lift h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 micro-bounce`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className="heading-md mb-4 text-gray-900 group-hover:text-pink-600 transition-colors">{feature.title}</h3>
                <p className="text-body-md text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              <span className="text-gradient-primary">Why Capybaras?</span>
            </h2>
            <p className="text-body-lg text-gray-800 mb-6 leading-relaxed">
              Capybaras are nature's zen masters - calm, peaceful, and perfectly in tune with their surroundings. 
              They teach us the art of presence, community, and gentle living.
            </p>
            <p className="text-body-md text-gray-700 mb-8 leading-relaxed">
              Our platform channels this wisdom into your wellness journey, helping you find balance, 
              track your health mindfully, and connect with a community that supports your growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="heading-lg text-gradient-primary mb-2">99.2%</div>
                <div className="text-body-sm text-gray-700">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="heading-lg text-gradient-primary mb-2">50K+</div>
                <div className="text-body-sm text-gray-700">Wellness Goals Achieved</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white border border-pink-200 rounded-2xl p-6 text-center">
                {/* Capybara Gallery for Lady Diane */}
                <h3 className="font-semibold text-gray-900 mb-6">Lady Diane's Capybara Friends</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/smartcapy.png" alt="Smart capybara" className="w-16 h-16 object-contain hover:scale-110 transition-transform cursor-pointer" />
                    <span className="text-xs text-gray-600">Study Buddy</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/flowercapy.png" alt="Flower capybara" className="w-16 h-16 object-contain hover:scale-110 transition-transform cursor-pointer" />
                    <span className="text-xs text-gray-600">Zen Master</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/eepycapy.png" alt="Sleepy capybara" className="w-16 h-16 object-contain hover:scale-110 transition-transform cursor-pointer" />
                    <span className="text-xs text-gray-600">Rest Guide</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <img src="/ribboncapy.png" alt="Ribbon capybara" className="w-16 h-16 object-contain hover:scale-110 transition-transform cursor-pointer" />
                    <span className="text-xs text-gray-600">Celebration</span>
                  </div>
                </div>
                
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <p className="text-sm text-pink-800 italic">
                    "Each capybara represents a different aspect of wellness, 
                    just like Diane's journey to better health! 🌸"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section Component
const FinalCTASection = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-3xl opacity-90"></div>
          <div className="absolute inset-0 bg-white/5 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative text-center py-16 px-8">
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Zen Journey?
            </h2>
            <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Created with love for Lady Diane Casilang, now available to help every woman 
              discover the capybara way to mindful living. Your transformation begins with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/register">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-50 group btn-premium"
                >
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 glass-button"
                >
                  Welcome Back
                </Button>
              </Link>
            </div>
            
            <p className="text-white/70 text-sm">
              No credit card required • Setup in 2 minutes • Join 12,847+ users
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
