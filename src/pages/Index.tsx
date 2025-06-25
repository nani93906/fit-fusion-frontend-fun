
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Award, Clock, Star, ChevronRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, number: '2000+', label: 'Happy Members' },
    { icon: Award, number: '50+', label: 'Expert Trainers' },
    { icon: Clock, number: '24/7', label: 'Access Hours' },
  ];

  const programs = [
    {
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    },
    {
      title: 'Cardio Fitness',
      description: 'Improve your cardiovascular health with high-energy cardio sessions.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      title: 'Group Classes',
      description: 'Join our community in fun and motivating group fitness classes.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'FitZone transformed my life! The trainers are amazing and the community is so supportive.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'Best gym in the city! Great equipment, clean facilities, and professional staff.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Emily Davis',
      rating: 5,
      text: 'I love the variety of classes and the flexible hours. Perfect for my busy schedule!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)',
          }}
        ></div>
        
        <div className={`relative z-20 text-center text-white max-w-4xl mx-auto px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TRANSFORM YOUR
            <span className="block text-gradient">BODY & MIND</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Join thousands of members who have achieved their fitness goals with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="gym-button">
              Start Your Journey
            </Link>
            <button className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold">
              <Play size={20} />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gym-primary to-gym-secondary rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of fitness programs designed to meet your specific goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button className="flex items-center space-x-2 text-gym-primary font-bold hover:text-gym-secondary transition-colors">
                    <span>Learn More</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient">Members Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover-lift">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community today and get access to world-class facilities, expert trainers, and unlimited motivation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-gym-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gym-primary transition-all duration-300">
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
