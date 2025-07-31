import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Award, 
  TrendingUp,
  User,
  Mail,
  Lock
} from 'lucide-react';

// Import our new components
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  FeatureCard, 
  StatCard, 
  TestimonialCard 
} from '../components/Card';
import { 
  Badge, 
  StatusBadge, 
  NotificationBadge, 
  ProgressBadge, 
  PriorityBadge, 
  TrendBadge 
} from '../components/Badge';
import { 
  Input, 
  Textarea, 
  SearchInput, 
  FormGroup, 
  FloatingLabelInput 
} from '../components/Input';
import Button from '../components/Button';

const ComponentShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', password: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Capybara Friends for Lady Diane */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src="/smartcapy.png" alt="Smart capybara" className="w-12 h-12 animate-bounce" style={{ animationDelay: '0s' }} />
            <img src="/flowercapy.png" alt="Flower capybara" className="w-12 h-12 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <img src="/cutesycapy.png" alt="Cute capybara" className="w-12 h-12 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
          
          <h1 className="heading-xl mb-6">
            <span className="text-gradient-primary">Modern Component Architecture</span>
          </h1>
          <p className="text-body-lg text-gray-800 max-w-3xl mx-auto">
            Showcase of our modern component system with hover effects, proper spacing, 
            visual hierarchy, and mobile-responsive design - all made with love for Lady Diane! 🐾
          </p>
        </motion.div>

        {/* Card Components Section */}
        <section className="mb-20">
          <h2 className="heading-lg text-gray-900 mb-8">Card Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Basic Cards */}
            <Card variant="default">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Default Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-gray-700">
                  This is a default card with hover effects and proper spacing.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Elevated Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-gray-700">
                  An elevated card with enhanced shadow and depth.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Glass Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-gray-700">
                  A glass morphism card with backdrop blur effects.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={Heart}
              title="Wellness Tracking"
              description="Monitor your health and wellness journey with beautiful, intuitive interfaces."
              gradient="from-pink-500 to-rose-500"
            />
            
            <FeatureCard
              icon={Shield}
              title="Privacy First"
              description="Your data is protected with enterprise-grade security and encryption."
              gradient="from-purple-500 to-pink-500"
            />
            
            <FeatureCard
              icon={Award}
              title="Achievement System"
              description="Celebrate milestones and track your progress with our gamified system."
              gradient="from-rose-500 to-purple-500"
            />
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard value="12,847" label="Active Users" trend="up" />
            <StatCard value="99.2%" label="Satisfaction Rate" trend="up" />
            <StatCard value="50K+" label="Goals Achieved" trend="neutral" />
            <StatCard value="24/7" label="Support Available" trend="neutral" />
          </div>

          {/* Testimonial Card */}
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              quote="This app was made just for me! My boyfriend created it because I kept forgetting my pills. Now I have the cutest capybara friends helping me stay on track. It's like having a personal wellness assistant that actually cares about me! 🌸"
              author="Lady Diane Casilang"
              role="The Inspiration Behind Milady"
              rating={5}
            />
          </div>
        </section>

        {/* Badge System Section */}
        <section className="mb-20">
          <h2 className="heading-lg text-gray-900 mb-8">Badge System</h2>
          
          <div className="space-y-8">
            {/* Status Badges */}
            <div>
              <h3 className="heading-md text-gray-900 mb-4">Status & Notification Badges</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <StatusBadge status="online" />
                <StatusBadge status="busy" />
                <StatusBadge status="away" />
                <StatusBadge status="offline" />
                
                <div className="relative">
                  <Button variant="ghost" size="sm">
                    Messages
                  </Button>
                  <NotificationBadge count={5} />
                </div>
                
                <div className="relative">
                  <Button variant="ghost" size="sm">
                    Notifications
                  </Button>
                  <NotificationBadge count={99} max={99} />
                </div>
              </div>
            </div>

            {/* Variant Badges */}
            <div>
              <h3 className="heading-md text-gray-900 mb-4">Variant Badges</h3>
              <div className="flex flex-wrap gap-4">
                <Badge variant="success" icon>Success</Badge>
                <Badge variant="warning" icon>Warning</Badge>
                <Badge variant="info" icon>Information</Badge>
                <Badge variant="error" icon>Error</Badge>
                <Badge variant="primary" icon>Primary</Badge>
                <Badge variant="secondary" icon>Secondary</Badge>
              </div>
            </div>

            {/* Specialized Badges */}
            <div>
              <h3 className="heading-md text-gray-900 mb-4">Specialized Badges</h3>
              <div className="flex flex-wrap gap-4">
                <ProgressBadge progress={85} />
                <ProgressBadge progress={45} />
                <PriorityBadge priority="high" />
                <PriorityBadge priority="medium" />
                <PriorityBadge priority="low" />
                <TrendBadge value={12} suffix="%" />
                <TrendBadge value={-5} suffix="%" />
              </div>
            </div>

            {/* Removable Badges */}
            <div>
              <h3 className="heading-md text-gray-900 mb-4">Removable Badges</h3>
              <div className="flex flex-wrap gap-4">
                <Badge variant="primary" removable onRemove={() => console.log('Badge removed')}>
                  Removable Tag
                </Badge>
                <Badge variant="info" removable onRemove={() => console.log('Filter removed')}>
                  Active Filter
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Input Components Section */}
        <section className="mb-20">
          <h2 className="heading-lg text-gray-900 mb-8">Input Components</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Examples */}
            <Card variant="elevated">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Contact Form</h3>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormGroup>
                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      error={formErrors.name}
                      leftIcon={<User className="w-5 h-5" />}
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      error={formErrors.email}
                      success={formData.email && !formErrors.email ? 'Valid email address' : undefined}
                      leftIcon={<Mail className="w-5 h-5" />}
                    />
                    
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleFormChange('password', e.target.value)}
                      error={formErrors.password}
                      info="Password must be at least 8 characters"
                      leftIcon={<Lock className="w-5 h-5" />}
                      showPasswordToggle
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Tell us about your wellness goals..."
                      value={formData.message}
                      onChange={(e) => handleFormChange('message', e.target.value)}
                      rows={4}
                    />
                  </FormGroup>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Input Variants */}
            <Card variant="elevated">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Input Variants</h3>
              </CardHeader>
              
              <CardContent>
                <FormGroup>
                  <SearchInput
                    placeholder="Search components..."
                    onSearch={setSearchTerm}
                    value={searchTerm}
                  />
                  
                  <Input
                    variant="filled"
                    label="Filled Input"
                    placeholder="Filled variant input"
                  />
                  
                  <Input
                    variant="outlined"
                    label="Outlined Input"
                    placeholder="Outlined variant input"
                  />
                  
                  <FloatingLabelInput
                    label="Floating Label"
                    placeholder="Type here..."
                  />
                  
                  <div className="grid grid-cols-3 gap-4">
                    <Input size="sm" placeholder="Small" />
                    <Input size="md" placeholder="Medium" />
                    <Input size="lg" placeholder="Large" />
                  </div>
                </FormGroup>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="mb-20">
          <h2 className="heading-lg text-gray-900 mb-8">Button Components</h2>
          
          <Card variant="elevated">
            <CardContent>
              <div className="space-y-8">
                {/* Button Variants */}
                <div>
                  <h3 className="heading-md text-gray-900 mb-4">Button Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>

                {/* Button Sizes */}
                <div>
                  <h3 className="heading-md text-gray-900 mb-4">Button Sizes</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                {/* Button States */}
                <div>
                  <h3 className="heading-md text-gray-900 mb-4">Button States</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Normal</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                    <Button variant="primary" className="group">
                      With Icon
                      <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visual Hierarchy Examples */}
        <section className="mb-20">
          <h2 className="heading-lg text-gray-900 mb-8">Visual Hierarchy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card variant="elevated">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Typography Scale</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h1 className="heading-xl text-gradient-primary">Extra Large Heading</h1>
                  <h2 className="heading-lg text-gray-900">Large Heading</h2>
                  <h3 className="heading-md text-gray-900">Medium Heading</h3>
                  <h4 className="heading-sm text-gray-900">Small Heading</h4>
                  <p className="text-body-lg text-gray-800">Large body text for important content</p>
                  <p className="text-body-md text-gray-700">Medium body text for regular content</p>
                  <p className="text-body-sm text-gray-600">Small body text for secondary information</p>
                  <p className="text-caption text-gray-500">Caption text for meta information</p>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <h3 className="heading-md text-gray-900">Spacing System</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-body-sm font-medium text-gray-700">Tight Spacing (space-y-2)</p>
                    <div className="h-4 bg-pink-100 rounded"></div>
                    <div className="h-4 bg-pink-200 rounded"></div>
                    <div className="h-4 bg-pink-300 rounded"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-body-sm font-medium text-gray-700">Normal Spacing (space-y-4)</p>
                    <div className="h-4 bg-rose-100 rounded"></div>
                    <div className="h-4 bg-rose-200 rounded"></div>
                    <div className="h-4 bg-rose-300 rounded"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-body-sm font-medium text-gray-700">Loose Spacing (space-y-6)</p>
                    <div className="h-4 bg-purple-100 rounded"></div>
                    <div className="h-4 bg-purple-200 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentShowcase;
