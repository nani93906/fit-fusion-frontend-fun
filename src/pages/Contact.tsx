
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Fitness Street', 'Gym City, GC 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', '(555) 123-4568', 'Emergency: (555) 911-FIT'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@fitzone.com', 'support@fitzone.com', 'trainers@fitzone.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 5:00 AM - 11:00 PM', 'Saturday: 6:00 AM - 10:00 PM', 'Sunday: 7:00 AM - 9:00 PM'],
    },
  ];

  const subjects = [
    'General Inquiry',
    'Membership Information',
    'Personal Training',
    'Group Classes',
    'Technical Support',
    'Feedback/Complaint'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Get in touch with our team - we're here to help you succeed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-primary focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-primary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 gym-button w-full"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear from you! Whether you have questions about our services, 
                need help with your membership, or just want to say hello, we're here for you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-gym-primary to-gym-secondary rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the city with easy access and parking
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-300 relative">
              {/* Placeholder for map - in a real application, you would integrate Google Maps or similar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p>123 Fitness Street, Gym City, GC 12345</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                  <p className="text-gray-600">Free parking available for all members</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Public Transport</h3>
                  <p className="text-gray-600">Bus stop 2 minutes walk, Metro 5 minutes</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-600">Fully wheelchair accessible facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit us today for a free tour and consultation with one of our fitness experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gym-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule a Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gym-primary transition-all duration-300">
              Call Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
