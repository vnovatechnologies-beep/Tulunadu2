import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Trophy, Music, Camera, Palette, Drama, Gamepad2, Heart, ChevronRight, ExternalLink, Play, Tag, ArrowRight } from 'lucide-react';

function EventsPage({ language }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    category: ''
  });

  const handleRegistration = (eventTitle) => {
    setRegistrationData({ ...registrationData, event: eventTitle });
    setShowRegistration(true);
  };

  const handleInputChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', registrationData);
    setShowRegistration(false);
    alert(language === 'kannada' ? 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!' : 'Registration successful!');
  };

  const content = {
    kannada: {
      title: 'ಕಾರ್ಯಕ್ರಮಗಳು',
      subtitle: 'ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಕ್ರೀಡಾ ಕಾರ್ಯಕ್ರಮಗಳು',
      ourEvents: 'ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳು',
      upcomingEvents: 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು',
      registerNow: 'ಈಗ ನೋಂದಣಿ ಮಾಡಿ',
      viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      eventPhoto: 'ಕಾರ್ಯಕ್ರಮದ ಫೋಟೋ',
      comingSoon: 'ಶೀಘ್ರದಲ್ಲಿ',
      registrationForm: 'ನೋಂದಣಿ ಫಾರಂ',
      name: 'ಹೆಸರು',
      email: 'ಇಮೇಲ್',
      phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
      category: 'ವರ್ಗ',
      submit: 'ನೋಂದಣಿ ಸಲ್ಲಿಸಿ',
      cancel: 'ರದ್ದುಗೊಳಿಸಿ',
      date: 'ದಿನಾಂಕ',
      time: 'ಸಮಯ',
      venue: 'ಸ್ಥಳ',
      participants: 'ಭಾಗವಹಿಸುವವರು',
      featured: 'ವಿಶೇಷ',
      joinEvent: 'ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಭಾಗವಹಿಸಿ'
    },
    english: {
      title: 'Events',
      subtitle: 'Our Cultural and Sports Programs',
      ourEvents: 'Our Events',
      upcomingEvents: 'Upcoming Events',
      registerNow: 'Register Now',
      viewDetails: 'View Details',
      eventPhoto: 'Event Photo',
      comingSoon: 'Coming Soon',
      registrationForm: 'Registration Form',
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      category: 'Category',
      submit: 'Submit Registration',
      cancel: 'Cancel',
      date: 'Date',
      time: 'Time',
      venue: 'Venue',
      participants: 'Participants',
      featured: 'Featured',
      joinEvent: 'Join Our Events'
    }
  };

  const currentContent = content[language];

  const upcomingEvents = [
    {
      title: language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2025' : 'Aisiri Mahotsava 2025',
      date: language === 'kannada' ? 'ಡಿಸೆಂಬರ್ 2025' : 'December 2025',
      description: language === 'kannada' ? 'ಬೆಂಗಳೂರಿನ ಅತಿದೊಡ್ಡ ತುಳು ಸಾಂಸ್ಕೃತಿಕ ಮಹೋತ್ಸವ' : 'Bengaluru\'s biggest Tulu cultural festival',
      participants: '25,000+',
      status: language === 'kannada' ? 'ನೋಂದಣಿ ಶೀಘ್ರದಲ್ಲಿ' : 'Registration Opening Soon',
      venue: language === 'kannada' ? 'ಬೆಂಗಳೂರು ಪ್ಯಾಲೇಸ್ ಗ್ರೌಂಡ್ಸ್' : 'Bengaluru Palace Grounds',
      time: language === 'kannada' ? '3 ದಿನಗಳ ಮಹೋತ್ಸವ' : '3 Days Festival'
    },
    {
      title: language === 'kannada' ? 'ನಲಿಪು ನವಿಲೇ ಸೀಸನ್ 04' : 'Nalipu Navile Season 04',
      date: language === 'kannada' ? 'ಮಾರ್ಚ್ 2025' : 'March 2025',
      description: language === 'kannada' ? 'ತುಳು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಭೆಗಳ ಸ್ಪರ್ಧೆ' : 'Tulu cultural talent competition',
      participants: '500+',
      status: language === 'kannada' ? 'ನೋಂದಣಿ ತೆರೆದಿದೆ' : 'Registration Open',
      venue: language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ' : 'Cultural Center',
      time: language === 'kannada' ? 'ಸಂಜೆ 6:00' : '6:00 PM'
    },
    {
      title: language === 'kannada' ? 'TJB ಪ್ರೀಮಿಯರ್ ಲೀಗ್ 2025' : 'TJB Premier League 2025',
      date: language === 'kannada' ? 'ಏಪ್ರಿಲ್ 2025' : 'April 2025',
      description: language === 'kannada' ? 'ತುಳುವರ ಕ್ರಿಕೆಟ್ ಪ್ರೀಮಿಯರ್ ಲೀಗ್' : 'Tuluva Cricket Premier League',
      participants: '16 Teams',
      status: language === 'kannada' ? 'ಟೀಮ್ ಆಯ್ಕೆ ನಡೆಯುತ್ತಿದೆ' : 'Team Selection Ongoing',
      venue: language === 'kannada' ? 'ವಿವಿಧ ಕ್ರೀಡಾಂಗಣಗಳು' : 'Various Stadiums',
      time: language === 'kannada' ? 'ಪೂರ್ಣ ದಿನ' : 'Full Day'
    }
  ];

  const events = [
    {
      title: language === 'kannada' ? 'ಚೆಂಡೆ ನಲಿಕೆ' : 'Chende Nalike',
      subtitle: language === 'kannada' ? 'ನೃತ್ಯ ಚೆಂಡೆ ವಾದನ' : 'Traditional Chende Show',
      description: language === 'kannada' ? 'ಪಾರಂಪರಿಕ ತುಳು ಚೆಂಡೆ ವಾದನ ಮತ್ತು ನೃತ್ಯ ಪ್ರದರ್ಶನ' : 'Traditional Tulu Chende performance with dance',
      icon: Music,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      date: language === 'kannada' ? 'ಮಾರ್ಚ್ 15, 2025' : 'March 15, 2025',
      time: '6:00 PM',
      venue: language === 'kannada' ? 'ಬೆಂಗಳೂರು ಸಭಾಂಗಣ' : 'Bengaluru Auditorium'
    },
    {
      title: language === 'kannada' ? 'ಪಿಲಿವೇಷ' : 'Pilivesa',
      subtitle: language === 'kannada' ? 'ಹುಲಿ ನೃತ್ಯ' : 'Tiger Dance',
      description: language === 'kannada' ? 'ಪಾರಂಪರಿಕ ತುಳು ಹುಲಿ ನೃತ್ಯ ಪ್ರದರ್ಶನ' : 'Traditional Tulu tiger dance performance',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      date: language === 'kannada' ? 'ಮಾರ್ಚ್ 22, 2025' : 'March 22, 2025',
      time: '7:00 PM',
      venue: language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ' : 'Cultural Center'
    },
    {
      title: 'Vanas Tenas',
      subtitle: language === 'kannada' ? 'ತುಳುನಾಡ ಆಹಾರ ಜಾತ್ರೆ' : 'Tulunad Food Festival',
      description: language === 'kannada' ? 'ಸಾಂಪ್ರದಾಯಿಕ ತುಳು ಆಹಾರ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಜಾತ್ರೆ' : 'Traditional Tulu food and culture festival',
      icon: Heart,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      date: language === 'kannada' ? 'ಏಪ್ರಿಲ್ 5, 2025' : 'April 5, 2025',
      time: '11:00 AM',
      venue: language === 'kannada' ? 'ಪಾರ್ಕ್ ಮೈದಾನ' : 'Park Grounds'
    },
    {
      title: language === 'kannada' ? 'ತುಳು ಪಟ್ಟಂಗ' : 'Tulu Pattanga',
      subtitle: language === 'kannada' ? 'ತುಳು ವಿಚಾರ ಗೋಷ್ಟಿ' : 'Tulu Discussion Forum',
      description: language === 'kannada' ? 'ತುಳು ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಚರ್ಚೆ' : 'Discussion on Tulu language and literature',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50',
      date: language === 'kannada' ? 'ಏಪ್ರಿಲ್ 12, 2025' : 'April 12, 2025',
      time: '3:00 PM',
      venue: language === 'kannada' ? 'ಸಮ್ಮೇಳನ ಸಭಾಂಗಣ' : 'Conference Hall'
    },
    {
      title: language === 'kannada' ? 'ಗೊಬ್ಬುದ ಕಲ' : 'Gobbuda Kala',
      subtitle: language === 'kannada' ? 'ತುಳು ಮಣ್ಣಿನ ಹಳೆಯ ಆಟೋಟಗಳು' : 'Sports & Games',
      description: language === 'kannada' ? 'ಪಾರಂಪರಿಕ ತುಳು ಆಟಗಳು ಮತ್ತು ಕ್ರೀಡೆಗಳು' : 'Traditional Tulu games and sports',
      icon: Gamepad2,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      date: language === 'kannada' ? 'ಏಪ್ರಿಲ್ 19, 2025' : 'April 19, 2025',
      time: '9:00 AM',
      venue: language === 'kannada' ? 'ಕ್ರೀಡಾಂಗಣ' : 'Sports Ground'
    },
    {
      title: language === 'kannada' ? 'ಚಿಲಿಪಿಲಿ ಗೊಂಬೆಲು' : 'Chilipili Gombelu',
      subtitle: language === 'kannada' ? 'ಗೊಂಬೆ ಆಟ' : 'Puppet Show',
      description: language === 'kannada' ? 'ಸಾಂಪ್ರದಾಯಿಕ ತುಳು ಗೊಂಬೆ ಆಟದ ಪ್ರದರ್ಶನ' : 'Traditional Tulu puppet show performance',
      icon: Drama,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      date: language === 'kannada' ? 'ಏಪ್ರಿಲ್ 26, 2025' : 'April 26, 2025',
      time: '5:00 PM',
      venue: language === 'kannada' ? 'ಮಕ್ಕಳ ಪಾರ್ಕ್' : 'Children\'s Park'
    },
    {
      title: language === 'kannada' ? 'ತುಳುವ ಸಿರಿ' : 'Tuluva Siri',
      subtitle: language === 'kannada' ? 'ನೃತ್ಯ ಪ್ರಕಾರ' : 'Dance Form',
      description: language === 'kannada' ? 'ಸಾಂಪ್ರದಾಯಿಕ ತುಳು ನೃತ್ಯ ಪ್ರಕಾರಗಳ ಪ್ರದರ್ಶನ' : 'Traditional Tulu dance forms performance',
      icon: Star,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      date: language === 'kannada' ? 'ಮೇ 3, 2025' : 'May 3, 2025',
      time: '6:30 PM',
      venue: language === 'kannada' ? 'ನೃತ್ಯ ಮಂದಿರ' : 'Dance Hall'
    },
    {
      title: 'Tulu Dance',
      subtitle: language === 'kannada' ? 'ಆಧುನಿಕ ತುಳು ನೃತ್ಯ ಸಂಯೋಜನೆ' : 'Dance N Beats Show',
      description: language === 'kannada' ? 'ಆಧುನಿಕ ತುಳು ನೃತ್ಯ ಮತ್ತು ಸಂಗೀತದ ಸಂಯೋಜನೆ' : 'Modern Tulu dance and music fusion',
      icon: Music,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      date: language === 'kannada' ? 'ಮೇ 10, 2025' : 'May 10, 2025',
      time: '7:30 PM',
      venue: language === 'kannada' ? 'ಮುಖ್ಯ ವೇದಿಕೆ' : 'Main Stage'
    },
    {
      title: language === 'kannada' ? 'ಕಾರ್ನಿಕದ ಶಿವಮಂತ್ರ' : 'Karnikada Shivamantra',
      subtitle: language === 'kannada' ? 'ಯಕ್ಷಗಾನ ಪ್ರದರ್ಶನ' : 'Yakshagana Performance',
      description: language === 'kannada' ? 'ಸಾಂಪ್ರದಾಯಿಕ ಯಕ್ಷಗಾನ ಕಲಾ ಪ್ರದರ್ಶನ' : 'Traditional Yakshagana art performance',
      icon: Drama,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50',
      date: language === 'kannada' ? 'ಮೇ 17, 2025' : 'May 17, 2025',
      time: '8:00 PM',
      venue: language === 'kannada' ? 'ಯಕ್ಷಗಾನ ಮಂದಿರ' : 'Yakshagana Theater'
    },
    {
      title: language === 'kannada' ? 'ಐಸಿರ ಪ್ಯಾಶನ್‌ ಶೋ' : 'Aisiri Fashion Show',
      subtitle: language === 'kannada' ? 'ತುಳು ಸಂಸ್ಕೃತಿ ಫ್ಯಾಷನ್ ಪ್ರದರ್ಶನ' : 'Tulu Cultural Fashion Walk',
      description: language === 'kannada' ? 'ತುಳು ಸಾಂಪ್ರದಾಯಿಕ ವೇಷಭೂಷಣ ಪ್ರದರ್ಶನ' : 'Traditional Tulu costume fashion show',
      icon: Palette,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50',
      date: language === 'kannada' ? 'ಮೇ 24, 2025' : 'May 24, 2025',
      time: '7:00 PM',
      venue: language === 'kannada' ? 'ಫ್ಯಾಷನ್ ರಾಂಪ್' : 'Fashion Ramp'
    },
    {
      title: language === 'kannada' ? 'ನಲಿಪುಗತ್ತಾ' : 'Nalipugatta',
      subtitle: language === 'kannada' ? 'ಪಾರಂಪರಿಕ ಮತ್ತು ಆಧುನಿಕ ಡಿಜೆ ಮಿಶ್ರಣ' : 'Traditional & Modern DJ Mix',
      description: language === 'kannada' ? 'ರಸ ಸಂಜೆ - ಪಾರಂಪರಿಕ ಮತ್ತು ಆಧುನಿಕ ಸಂಗೀತದ ಮಿಶ್ರಣ' : 'Evening of joy - Traditional and modern music fusion',
      icon: Music,
      color: 'from-teal-500 to-green-500',
      bgColor: 'from-teal-50 to-green-50',
      date: language === 'kannada' ? 'ಜೂನ್ 7, 2025' : 'June 7, 2025',
      time: '8:00 PM',
      venue: language === 'kannada' ? 'ಮುಕ್ತ ವೇದಿಕೆ' : 'Open Stage'
    },
    {
      title: language === 'kannada' ? 'ಕಬ್ಬತ್ತ್/ಮೊಸರುಕುಡಿಕೆ ಆಟಗಳು' : 'Kabbatt/Mosarukudike Games',
      subtitle: language === 'kannada' ? 'ಕ್ರೀಡೆಗಳು ಮತ್ತು ಆಟಗಳು' : 'Sports and Games',
      description: language === 'kannada' ? 'ಪಾರಂಪರಿಕ ತುಳು ಕ್ರೀಡೆಗಳು ಮತ್ತು ಆಟಗಳ ಸ್ಪರ್ಧೆ' : 'Traditional Tulu sports and games competition',
      icon: Trophy,
      color: 'from-emerald-500 to-cyan-500',
      bgColor: 'from-emerald-50 to-cyan-50',
      date: language === 'kannada' ? 'ಜೂನ್ 14, 2025' : 'June 14, 2025',
      time: '10:00 AM',
      venue: language === 'kannada' ? 'ಕ್ರೀಡಾ ಸಂಕೀರ್ಣ' : 'Sports Complex'
    },
    {
      title: language === 'kannada' ? 'ಜೋಡು ಜೀಟಿಗೆ' : 'Jodu Jeetige',
      subtitle: language === 'kannada' ? 'ತುಳು ನಾಟಕ' : 'Drama',
      description: language === 'kannada' ? 'ಸಾಂಪ್ರದಾಯಿಕ ತುಳು ನಾಟಕ ಪ್ರದರ್ಶನ' : 'Traditional Tulu drama performance',
      icon: Drama,
      color: 'from-rose-500 to-red-500',
      bgColor: 'from-rose-50 to-red-50',
      date: language === 'kannada' ? 'ಜೂನ್ 21, 2025' : 'June 21, 2025',
      time: '7:30 PM',
      venue: language === 'kannada' ? 'ನಾಟಕ ಮಂದಿರ' : 'Drama Theater'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {currentContent.upcomingEvents}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Event Photo Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Camera className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{currentContent.eventPhoto}</p>
                    <p className="text-xs">{currentContent.comingSoon}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentContent.featured}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} {currentContent.participants}</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4 text-center">
                    {event.status}
                  </div>
                  
                  <button 
                    onClick={() => handleRegistration(event.title)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                  >
                    {currentContent.registerNow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 text-white">
                <div className="flex items-center mb-4">
                  <Tag className="h-6 w-6 mr-2" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.featured}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {language === 'kannada' 
                    ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2025 - ಇತಿಹಾಸದ ಅತಿದೊಡ್ಡ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ'
                    : 'Aisiri Mahotsava 2025 - Biggest Cultural Festival in History'
                  }
                </h3>
                <p className="text-lg mb-6 text-orange-100">
                  {language === 'kannada'
                    ? 'ಬೆಂಗಳೂರಿನ ಇತಿಹಾಸದಲ್ಲಿ ಅತಿದೊಡ್ಡ ತುಳು ಸಾಂಸ್ಕೃತಿಕ ಮಹೋತ್ಸವ ಐಸಿರ 2025. 25,000+ ಭಾಗವಹಿಸುವವರು, 100+ ಕಲಾವಿದರು, 3 ದಿನಗಳ ಅದ್ಭುತ ಆಚರಣೆ.'
                    : 'The biggest Tulu cultural festival in Bengaluru\'s history - Aisiri 2025. 25,000+ participants, 100+ artists, 3 days of amazing celebration.'
                  }
                </p>
                <button 
                  onClick={() => handleRegistration(language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2025' : 'Aisiri Mahotsava 2025')}
                  className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  {currentContent.registerNow}
                </button>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <Calendar className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-2xl font-bold">
                    {language === 'kannada' ? 'ಡಿಸೆಂಬರ್ 2025' : 'December 2025'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {currentContent.ourEvents}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${event.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden`}
                >
                  {/* Event Photo Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">{currentContent.eventPhoto}</p>
                      <p className="text-xs">{currentContent.comingSoon}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-sm font-medium text-orange-600 mb-3">{event.subtitle}</p>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleRegistration(event.title)}
                        className={`flex-1 bg-gradient-to-r ${event.color} text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                      >
                        {currentContent.registerNow}
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm">
                        {currentContent.viewDetails}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.registrationForm}</h2>
            <p className="text-gray-600 mb-6">
              {language === 'kannada' ? 'ಕಾರ್ಯಕ್ರಮ:' : 'Event:'} <span className="font-semibold">{registrationData.event}</span>
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={registrationData.name}
                  onChange={handleInputChange}
                  placeholder={language === 'kannada' ? 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು' : 'Your full name'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={registrationData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.category}
                </label>
                <select
                  name="category"
                  value={registrationData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">
                    {language === 'kannada' ? 'ವರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ' : 'Select Category'}
                  </option>
                  <option value="participant">
                    {language === 'kannada' ? 'ಭಾಗವಹಿಸುವವರು' : 'Participant'}
                  </option>
                  <option value="volunteer">
                    {language === 'kannada' ? 'ಸ್ವಯಂಸೇವಕ' : 'Volunteer'}
                  </option>
                  <option value="spectator">
                    {language === 'kannada' ? 'ವೀಕ್ಷಕ' : 'Spectator'}
                  </option>
                </select>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  {currentContent.submit}
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegistration(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  {currentContent.cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {currentContent.joinEvent}
          </h2>
          <p className="text-xl mb-8">
            {language === 'kannada' 
              ? 'ತುಳು ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕ್ರೀಡೆಯ ಸಂಗಮದಲ್ಲಿ ಭಾಗವಹಿಸಿ'
              : 'Participate in the confluence of Tulu culture and sports'
            }
          </p>
          <button 
            onClick={() => handleRegistration(language === 'kannada' ? 'ಸಾಮಾನ್ಯ ನೋಂದಣಿ' : 'General Registration')}
            className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            {currentContent.registerNow}
          </button>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;