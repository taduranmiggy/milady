import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Heart, Pill, Circle, CheckCircle2, AlertCircle } from 'lucide-react';

interface DayData {
  date: number;
  isCurrentMonth: boolean;
  isPillDay: boolean;
  pillTaken: boolean;
  cycleDay?: number;
  isOvulation?: boolean;
  isPeriod?: boolean;
  notes?: string;
}

const CalendarPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const animationVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.05
        }
      }
    },
    item: {
      hidden: { scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: shouldReduceMotion ? 0.1 : 0.2 }
      }
    }
  };

  // Generate calendar days
  const generateCalendarDays = (): DayData[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: DayData[] = [];
    const currentDay = new Date(startDate);
    
    // Mock pill schedule (every day) and cycle data
    const pillSchedule = Array.from({ length: 21 }, (_, i) => i + 1); // 21 active pills
    const mockCycleStart = new Date(year, month, 5); // Mock period start
    
    for (let i = 0; i < 42; i++) { // 6 weeks
      const isCurrentMonth = currentDay.getMonth() === month;
      const dayOfMonth = currentDay.getDate();
      const today = new Date();
      const isToday = currentDay.toDateString() === today.toDateString();
      
      // Calculate cycle day (mock data)
      const daysSinceStart = Math.floor((currentDay.getTime() - mockCycleStart.getTime()) / (1000 * 60 * 60 * 24));
      const cycleDay = ((daysSinceStart % 28) + 28) % 28 + 1;
      
      days.push({
        date: dayOfMonth,
        isCurrentMonth,
        isPillDay: isCurrentMonth && pillSchedule.includes(cycleDay),
        pillTaken: isCurrentMonth && dayOfMonth < today.getDate() && pillSchedule.includes(cycleDay),
        cycleDay: isCurrentMonth ? cycleDay : undefined,
        isOvulation: isCurrentMonth && cycleDay === 14,
        isPeriod: isCurrentMonth && cycleDay >= 1 && cycleDay <= 5,
        notes: isToday ? 'Today' : undefined
      });
      
      currentDay.setDate(currentDay.getDate() + 1);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const getDayStyle = (day: DayData) => {
    let baseStyle = "relative w-12 h-12 flex items-center justify-center text-sm font-medium rounded-lg transition-all cursor-pointer ";
    
    if (!day.isCurrentMonth) {
      baseStyle += "text-gray-300 hover:bg-gray-50 ";
    } else if (day.isPeriod) {
      baseStyle += "bg-red-100 text-red-700 hover:bg-red-200 ";
    } else if (day.isOvulation) {
      baseStyle += "bg-purple-100 text-purple-700 hover:bg-purple-200 ";
    } else if (day.isPillDay && day.pillTaken) {
      baseStyle += "bg-green-100 text-green-700 hover:bg-green-200 ";
    } else if (day.isPillDay && !day.pillTaken) {
      baseStyle += "bg-pink-100 text-pink-700 hover:bg-pink-200 border-2 border-pink-300 ";
    } else {
      baseStyle += "text-gray-700 hover:bg-gray-50 ";
    }
    
    return baseStyle;
  };

  const getStatusIcon = (day: DayData) => {
    if (day.isPeriod) return <Circle className="w-3 h-3 text-red-500" fill="currentColor" />;
    if (day.isOvulation) return <Circle className="w-3 h-3 text-purple-500" fill="currentColor" />;
    if (day.isPillDay && day.pillTaken) return <CheckCircle2 className="w-3 h-3 text-green-500" />;
    if (day.isPillDay && !day.pillTaken) return <AlertCircle className="w-3 h-3 text-pink-500" />;
    return null;
  };

  const stats = [
    { label: 'Pill Streak', value: '12 days', color: 'text-green-600' },
    { label: 'Next Period', value: 'In 18 days', color: 'text-red-600' },
    { label: 'Cycle Day', value: '10', color: 'text-purple-600' },
    { label: 'This Month', value: '85% taken', color: 'text-pink-600' }
  ];

  const legend = [
    { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, label: 'Pill Taken', color: 'bg-green-50' },
    { icon: <AlertCircle className="w-4 h-4 text-pink-500" />, label: 'Pill Due', color: 'bg-pink-50' },
    { icon: <Circle className="w-4 h-4 text-red-500" fill="currentColor" />, label: 'Period', color: 'bg-red-50' },
    { icon: <Circle className="w-4 h-4 text-purple-500" fill="currentColor" />, label: 'Ovulation', color: 'bg-purple-50' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <motion.section
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-20"
        aria-labelledby="calendar-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 relative">
            {/* Floating capybaras */}
            <motion.img 
              src="/smartcapy.png" 
              alt="Smart capybara with calendar"
              className="absolute -top-8 -left-4 w-16 h-16 opacity-60"
              animate={shouldReduceMotion ? {} : { 
                y: [-5, 5, -5],
                rotate: [-3, 3, -3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.img 
              src="/bookcapy.png" 
              alt="Studious capybara"
              className="absolute -top-4 -right-8 w-14 h-14 opacity-60"
              animate={shouldReduceMotion ? {} : { 
                y: [5, -5, 5],
                rotate: [3, -3, 3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>🌸 Your Capybara Health Calendar</span>
            </div>
            <h1 id="calendar-heading" className="text-3xl lg:text-5xl font-bold text-gray-900">
              Track Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Zen Health Journey
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor your pill schedule, cycle patterns, and health insights with the calm wisdom of capybaras 🌿
            </p>
          </div>

          {/* Stats */}
          <motion.div
            variants={animationVariants.container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={animationVariants.item}
                className="card text-center"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Calendar */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar Grid */}
            <div className="lg:col-span-2">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={() => navigateMonth('prev')}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </motion.button>
                    <motion.button
                      onClick={() => navigateMonth('next')}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>

                {/* Week Days */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <motion.div
                  variants={animationVariants.container}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-7 gap-1"
                >
                  {calendarDays.map((day, index) => (
                    <motion.button
                      key={index}
                      variants={animationVariants.item}
                      className={getDayStyle(day)}
                      onClick={() => setSelectedDay(day)}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      aria-label={`${day.date} ${day.isPillDay ? (day.pillTaken ? 'pill taken' : 'pill due') : ''}`}
                    >
                      {day.date}
                      {getStatusIcon(day) && (
                        <div className="absolute -top-1 -right-1">
                          {getStatusIcon(day)}
                        </div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Legend */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Legend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {legend.map((item, index) => (
                      <div key={index} className={`flex items-center space-x-2 p-2 rounded-lg ${item.color}`}>
                        {item.icon}
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Today's Summary */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <Pill className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Morning Pill</div>
                      <div className="text-sm text-green-600">✓ Taken at 8:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Cycle Day 10</div>
                      <div className="text-sm text-gray-600">Follicular phase</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <motion.button
                    className="w-full btn-primary text-left"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  >
                    Mark Pill Taken
                  </motion.button>
                  <motion.button
                    className="w-full px-4 py-3 border border-pink-300 text-pink-600 rounded-xl hover:bg-pink-50 transition-colors text-left"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  >
                    Log Symptoms
                  </motion.button>
                  <motion.button
                    className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-left"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  >
                    View Insights
                  </motion.button>
                </div>
              </motion.div>

              {/* Upcoming Reminders */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <div className="font-medium text-pink-700">Tomorrow</div>
                    <div className="text-sm text-pink-600">Morning pill reminder</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium text-purple-700">In 4 days</div>
                    <div className="text-sm text-purple-600">Ovulation window begins</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="font-medium text-red-700">In 18 days</div>
                    <div className="text-sm text-red-600">Expected period start</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Day Modal */}
      {selectedDay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDay(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Day {selectedDay.date} Details
            </h3>
            <div className="space-y-3">
              {selectedDay.cycleDay && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Cycle Day:</span>
                  <span className="font-medium">{selectedDay.cycleDay}</span>
                </div>
              )}
              {selectedDay.isPillDay && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Pill Status:</span>
                  <span className={`font-medium ${selectedDay.pillTaken ? 'text-green-600' : 'text-pink-600'}`}>
                    {selectedDay.pillTaken ? 'Taken' : 'Due'}
                  </span>
                </div>
              )}
              {selectedDay.isPeriod && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Period:</span>
                  <span className="font-medium text-red-600">Active</span>
                </div>
              )}
              {selectedDay.isOvulation && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Ovulation:</span>
                  <span className="font-medium text-purple-600">Predicted</span>
                </div>
              )}
            </div>
            <button
              onClick={() => setSelectedDay(null)}
              className="mt-6 w-full btn-primary"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CalendarPage;
