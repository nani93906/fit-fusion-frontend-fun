
import { Users, Target, Heart, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We help you set and achieve realistic fitness goals with personalized training plans.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Our supportive community creates lasting friendships and motivation for your journey.',
    },
    {
      icon: Zap,
      title: 'Results Driven',
      description: 'Our proven methods and expert trainers deliver real, measurable results.',
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'Everyone is welcome here, regardless of fitness level or background.',
    },
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Head Trainer & Founder',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?w=300&h=300&fit=crop&crop=face',
      bio: '15+ years in fitness training with certifications in strength training and nutrition.',
    },
    {
      name: 'Lisa Chen',
      role: 'Yoga & Wellness Instructor',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a0ce8a2bb9?w=300&h=300&fit=crop&crop=face',
      bio: 'Certified yoga instructor specializing in mindfulness and stress relief techniques.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
      bio: 'Former Olympic athlete with expertise in high-performance training and rehabilitation.',
    },
    {
      name: 'Sarah Williams',
      role: 'Nutritionist & Wellness Coach',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      bio: 'Registered dietitian helping members achieve optimal health through proper nutrition.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="text-gradient">FitZone</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              More than just a gym - we're a community dedicated to transforming lives through fitness
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, FitZone started as a small neighborhood gym with a big vision: 
                to create a welcoming space where people of all fitness levels could pursue their health goals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown into a premier fitness destination, but our core values remain the same. 
                We believe that fitness is not just about physical transformation—it's about building confidence, 
                creating community, and improving overall quality of life.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve over 2,000 members with state-of-the-art equipment, 
                expert trainers, and a variety of programs designed to meet every fitness need.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" 
                alt="Gym interior"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-gym-primary text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">14+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower individuals to achieve their fitness goals by providing exceptional facilities, 
                expert guidance, and a supportive community that motivates and inspires lasting lifestyle changes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading fitness destination that transforms lives, builds communities, 
                and sets the standard for excellence in health and wellness services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gym-primary to-gym-secondary rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert trainers and wellness professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gym-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the FitZone difference and become part of our fitness family
          </p>
          <button className="bg-white text-gym-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
