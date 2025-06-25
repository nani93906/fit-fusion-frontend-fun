
import { Check, Star, Users, Clock, Dumbbell } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const membershipPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      popular: false,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free WiFi',
        'Mobile app access',
        'Basic workout plans'
      ],
      buttonText: 'Get Started',
      buttonClass: 'border-2 border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-white'
    },
    {
      name: 'Premium',
      price: '$59',
      period: 'per month',
      popular: true,
      features: [
        'All Basic features',
        'Unlimited group classes',
        '2 personal training sessions',
        'Nutrition consultation',
        'Priority booking',
        'Guest privileges (2 per month)'
      ],
      buttonText: 'Most Popular',
      buttonClass: 'gym-button'
    },
    {
      name: 'Elite',
      price: '$99',
      period: 'per month',
      popular: false,
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Custom meal plans',
        '24/7 gym access',
        'Massage therapy (2 per month)',
        'VIP locker room access',
        'Unlimited guest privileges'
      ],
      buttonText: 'Go Elite',
      buttonClass: 'border-2 border-gym-primary text-gym-primary hover:bg-gym-primary hover:text-white'
    }
  ];

  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers to maximize your results.',
      features: ['Customized workout plans', 'Form correction', 'Goal tracking', 'Motivation & support'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy classes that make fitness fun and social.',
      features: ['Yoga & Pilates', 'HIIT Training', 'Zumba & Dance', 'Spin Classes'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop'
    },
    {
      icon: Star,
      title: 'Nutrition Coaching',
      description: 'Expert guidance to fuel your body for optimal performance.',
      features: ['Meal planning', 'Supplement advice', 'Body composition analysis', 'Lifestyle coaching'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop'
    }
  ];

  const classSchedule = [
    { time: '6:00 AM', class: 'Morning Yoga', instructor: 'Lisa Chen', duration: '60 min' },
    { time: '7:00 AM', class: 'HIIT Bootcamp', instructor: 'Marcus Johnson', duration: '45 min' },
    { time: '9:00 AM', class: 'Pilates', instructor: 'Sarah Williams', duration: '50 min' },
    { time: '12:00 PM', class: 'Lunch Break Cardio', instructor: 'Alex Rodriguez', duration: '30 min' },
    { time: '6:00 PM', class: 'Strength Training', instructor: 'Marcus Johnson', duration: '60 min' },
    { time: '7:30 PM', class: 'Zumba Dance', instructor: 'Lisa Chen', duration: '45 min' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Comprehensive fitness solutions tailored to your goals and lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From personal training to group classes, we have everything you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover-lift">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gym-primary to-gym-secondary rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-gym-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Membership <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your lifestyle and fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg hover-lift relative ${
                  plan.popular ? 'border-2 border-gym-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gym-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-gym-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Class <span className="text-gradient">Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sample daily schedule - full weekly schedule available to members
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-4 bg-gym-primary text-white p-4 font-bold">
              <div>Time</div>
              <div>Class</div>
              <div>Instructor</div>
              <div>Duration</div>
            </div>
            {classSchedule.map((item, index) => (
              <div key={index} className="grid grid-cols-4 p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-900">{item.time}</div>
                <div className="text-gray-700">{item.class}</div>
                <div className="text-gray-600">{item.instructor}</div>
                <div className="text-gray-600">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose your membership plan and begin your transformation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gym-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gym-primary transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
