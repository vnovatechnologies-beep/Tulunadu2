import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Users, HandHeart, Trophy, Camera, Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Youtube, Heart, Droplets, GraduationCap,
  Star, Award, Play, ChevronRight, ArrowRight, Clock, MapPin as Location, 
  CheckCircle, Zap, Target, Eye, ExternalLink
} from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';

function HomePage({ language }) {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [counters, setCounters] = useState({
    members: 0,
    years: 0,
    events: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animated counters
  useEffect(() => {
    if (visibleSections.has('stats') && !hasAnimated) {
      setHasAnimated(true);
      const targets = { members: 5000, years: 7, events: 100 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          members: Math.floor(targets.members * easeOutQuart),
          years: Math.floor(targets.years * easeOutQuart),
          events: Math.floor(targets.events * easeOutQuart)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    }
  }, [visibleSections, hasAnimated]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const content = {
    kannada: {
      orgName: 'ತುಳುನಾಡ ಜವನೆರ್ ಬೆಂಗಳೂರು ®',
      tagline: 'ಸಂಸ್ಕೃತಿ... ಭಾಷೆ... ಸೇವೆ.. ಕ್ರೀಡೆ..',
      heroTitle: 'ತುಳುವರನ್ನು ಒಟ್ಟುಗೂಡಿಸುವ ಶಕ್ತಿ',
      heroSubtitle: 'ರಾಜಧಾನಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ತುಳು ಸಂಸ್ಕೃತಿ, ಭಾಷೆ, ಸೇವೆ ಮತ್ತು ಕ್ರೀಡೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡುತ್ತಿದ್ದೇವೆ',
      joinUs: 'ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ',
      aboutUs: 'ನಮ್ಮ ಬಗ್ಗೆ',
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      liveUpdates: 'ಲೈವ್ ಅಪ್‌ಡೇಟ್‌ಗಳು',
      members: 'ಸದಸ್ಯರು',
      years: 'ವರ್ಷಗಳು',
      events: 'ಕಾರ್ಯಕ್ರಮಗಳು',
      sevaWorks: 'ಸೇವಾ ಕಾರ್ಯಗಳು',
      sevaTitle: 'ಸೇವಾ ಪಥ',
      sevaSubtitle: 'ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ನಮ್ಮ ಕೊಡುಗೆ',
      eventsTitle: 'ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳು',
      eventsSubtitle: 'ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕ್ರೀಡೆಯ ಸಂಗಮ',
      videoGallery: 'ವೀಡಿಯೊ ಗ್ಯಾಲರಿ',
      gallerySubtitle: 'ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಚಿತ್ರಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳು',
      upcomingEvents: 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು',
      exploreAllVideos: 'ಎಲ್ಲಾ ವೀಡಿಯೊಗಳನ್ನು ನೋಡಿ',
      visitFacebook: 'ನಮ್ಮ ಫೇಸ್‌ಬುಕ್ ಪುಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ',
      visitInstagram: 'ನಮ್ಮ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಪುಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ',
      contactWhatsapp: 'ವಾಟ್ಸ್‌ಆಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ',
      ourYoutubeChannel: 'ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್'
    },
    english: {
      orgName: 'Tulu Nadu Javaner Bengaluru ®',
      tagline: 'Culture... Language... Service... Sports..',
      heroTitle: 'Uniting Tuluvas with Strength',
      heroSubtitle: 'Promoting Tulu culture, language, service and sports in the capital city Bengaluru',
      joinUs: 'Join Us',
      aboutUs: 'About Us',
      learnMore: 'Learn More',
      liveUpdates: 'Live Updates',
      members: 'Members',
      years: 'Years',
      events: 'Events',
      sevaWorks: 'Seva Works',
      sevaTitle: 'Seva Path',
      sevaSubtitle: 'Our Contribution to Society',
      eventsTitle: 'Our Events',
      eventsSubtitle: 'Confluence of Culture and Sports',
      videoGallery: 'Video Gallery',
      gallerySubtitle: 'Photos and videos from our programs',
      upcomingEvents: 'Upcoming Events',
      exploreAllVideos: 'Explore All Videos',
      visitFacebook: 'Visit Our Facebook Page',
      visitInstagram: 'Visit Our Instagram Page',
      contactWhatsapp: 'Contact Us In Whatsapp',
      ourYoutubeChannel: 'Our Youtube Channel'
    }
  };

  const currentContent = content[language];

  const stats = [
    { number: `${counters.members}+`, label: currentContent.members, color: 'text-orange-400' },
    { number: `${counters.years}+`, label: currentContent.years, color: 'text-yellow-400' },
    { number: `${counters.events}+`, label: currentContent.events, color: 'text-red-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tulu-warm-grey/10 to-tulu-golden-yellow/10">
      {/* Modern Hero Carousel */}
      <HeroCarousel language={language} />

      {/* Cinematic Video Section - Inspired by Soul Cinema Design */}
      <section className="relative min-h-screen overflow-hidden mt-16" style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(220, 186, 116, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(143, 24, 16, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(141, 110, 88, 0.25) 0%, transparent 50%),
          linear-gradient(135deg, 
            rgba(25, 6, 5, 0.05) 0%, 
            rgba(84, 21, 12, 0.08) 25%, 
            rgba(220, 186, 116, 0.12) 50%, 
            rgba(143, 24, 16, 0.06) 75%, 
            rgba(52, 2, 5, 0.04) 100%
          ),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(220, 186, 116, 0.03) 20px,
            rgba(220, 186, 116, 0.03) 40px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 30px,
            rgba(143, 24, 16, 0.02) 30px,
            rgba(143, 24, 16, 0.02) 60px
          )
        `
      }}>
        {/* Diagonal Background Elements */}
        <div className="absolute inset-0">
          {/* Top diagonal with lights */}
          <div className="absolute top-0 left-0 w-full h-40 transform -skew-y-2 origin-top-left shadow-lg" style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.95) 0%, 
              rgba(220, 186, 116, 0.1) 30%, 
              rgba(255, 255, 255, 0.9) 70%, 
              rgba(143, 24, 16, 0.05) 100%
            )`
          }}>
            {/* Decorative lights */}
            <div className="absolute top-6 left-0 w-full flex justify-center space-x-8">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  style={{
                    background: `radial-gradient(circle, 
                      rgba(220, 186, 116, 0.8) 0%, 
                      rgba(255, 255, 255, 0.9) 40%, 
                      rgba(143, 24, 16, 0.1) 100%
                    )`,
                    animationDelay: `${i * 0.2}s`
                  }}
                  className="w-8 h-8 rounded-full shadow-lg animate-pulse"
                ></div>
              ))}
            </div>
            
            {/* Traditional Mangalore Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(143, 24, 16, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(220, 186, 116, 0.4) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(141, 110, 88, 0.2) 1.5px, transparent 1.5px)
              `,
              backgroundSize: '40px 40px, 60px 60px, 80px 80px'
            }}></div>
          </div>
          
          {/* Bottom diagonal with lights */}
          <div className="absolute bottom-0 right-0 w-full h-40 transform skew-y-2 origin-bottom-right shadow-lg" style={{
            background: `linear-gradient(45deg, 
              rgba(255, 255, 255, 0.95) 0%, 
              rgba(141, 110, 88, 0.08) 30%, 
              rgba(255, 255, 255, 0.9) 70%, 
              rgba(220, 186, 116, 0.06) 100%
            )`
          }}>
            {/* Floating decorative elements */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  style={{
                    background: `radial-gradient(circle,
                      rgba(220, 186, 116, 0.8) 0%,
                      rgba(255, 255, 255, 0.9) 40%,
                      rgba(143, 24, 16, 0.1) 100%
                    )`,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.3,
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Traditional Pattern */}
            <div className="absolute inset-0 opacity-8" style={{
              backgroundImage: `
                radial-gradient(circle at 30% 70%, rgba(220, 186, 116, 0.25) 2px, transparent 2px),
                radial-gradient(circle at 70% 30%, rgba(143, 24, 16, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 70px 70px'
            }}></div>
          </div>
          
          {/* Cultural Pattern Overlay for entire background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              repeating-conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                rgba(220, 186, 116, 0.1) 30deg,
                transparent 60deg,
                rgba(143, 24, 16, 0.08) 90deg,
                transparent 120deg
              )
            `,
            backgroundSize: '200px 200px'
          }}></div>
        </div>

        {/* Main Video Container */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Video with Diagonal Clip Path */}
            <div 
              className="relative h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden shadow-2xl"
              style={{
               clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
               transform: 'scale(0.85)',
               transformOrigin: 'center'
              }}
            >
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/AISIRA%202025%203.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
             <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-30">
          <div className="w-2 h-48" style={{
            background: `linear-gradient(to bottom, 
              rgba(220, 186, 116, 0.6) 0%, 
              rgba(143, 24, 16, 0.4) 50%, 
              rgba(141, 110, 88, 0.5) 100%
            )`
          }}></div>
        </div>
        <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-30">
          <div className="w-2 h-48" style={{
            background: `linear-gradient(to bottom, 
              rgba(141, 110, 88, 0.5) 0%, 
              rgba(220, 186, 116, 0.6) 50%, 
              rgba(143, 24, 16, 0.4) 100%
            )`
          }}></div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center text-white">
            <div className="w-8 h-12 border-2 rounded-full flex justify-center mb-3" style={{
              borderColor: 'rgba(220, 186, 116, 0.7)',
              background: 'rgba(255, 255, 255, 0.1)'
            }}>
              <div className="w-1.5 h-4 rounded-full mt-3 animate-bounce" style={{
                background: `linear-gradient(to bottom, 
                  rgba(220, 186, 116, 0.9) 0%, 
                  rgba(143, 24, 16, 0.7) 100%
                )`
              }}></div>
            </div>
            <span className={`text-xs tracking-widest ${language === 'kannada' ? 'font-kannada' : 'font-display'}`} style={{
              color: 'rgba(220, 186, 116, 0.9)',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}>
             ಸ್ಕ್ರಾಲ್
            </span>
          </div>
        </div>
      </section>

      {/* Original Full Screen Video Section - Keeping as backup */}
      <section className="relative h-screen overflow-hidden bg-black hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/AISIRA%202025%203.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-tulu-almost-black/80 via-transparent to-transparent flex items-end justify-center">
          <div className="text-center text-white p-8 mb-16 max-w-4xl">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
              {language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2025' : 'Aisiri Mahotsava 2025'}
            </h2>
            <p className={`text-xl md:text-2xl mb-8 text-tulu-golden-yellow animate-fade-in-up ${language === 'kannada' ? 'font-kannada' : 'font-body'}`} style={{animationDelay: '0.3s'}}>
              {language === 'kannada' 
                ? 'ಬೆಂಗಳೂರಿನ ಅತಿದೊಡ್ಡ ತುಳು ಸಾಂಸ್ಕೃತಿಕ ಮಹೋತ್ಸವ'
                : 'Bengaluru\'s Biggest Tulu Cultural Festival'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className={`px-8 py-4 bg-gradient-to-r from-tulu-rustic-red to-tulu-bold-red text-white rounded-full font-semibold text-lg hover:from-tulu-bold-red hover:to-tulu-deep-maroon transition-all duration-300 transform hover:scale-105 shadow-xl ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                {language === 'kannada' ? 'ನೋಂದಣಿ ಮಾಡಿ' : 'Register Now'}
              </button>
              <button className={`px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                {language === 'kannada' ? 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ' : 'Learn More'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
              {language === 'kannada' ? 'ಐಸಿರ 2025 ಪ್ರಿವ್ಯೂ' : 'Aisiri 2025 Preview'}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Service Cards Section - Mangalore Style */}
      <section className="py-16 bg-white animate-fade-in-up" data-animate id="seva-path">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-tulu-warm-grey/10 to-tulu-rustic-red/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group animate-zoom-in">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-tulu-rustic-red to-tulu-bold-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow">
                  <Droplets className="h-10 w-10 text-white group-hover:animate-bounce" />
                </div>
                <h3 className={`text-xl font-bold text-tulu-almost-black mb-4 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>{language === 'kannada' ? 'ರಕ್ತದಾನ' : 'Blood Donation'}</h3>
                <p className={`text-tulu-coffee-brown leading-relaxed ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' 
                    ? 'ಆಸ್ಪತ್ರೆಗಳಿಗೆ ನಿಯಮಿತ ರಕ್ತದಾನ ಶಿಬಿರಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವವರಿಗೆ ತಕ್ಷಣ ಸಹಾಯ'
                    : 'Regular blood donation camps for hospitals and immediate help for those in need'
                  }
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-tulu-golden-yellow/10 to-tulu-warm-taupe/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 group animate-zoom-in" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-tulu-golden-yellow to-tulu-warm-taupe rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow">
                  <Heart className="h-10 w-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className={`text-xl font-bold text-tulu-almost-black mb-4 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>{language === 'kannada' ? 'ಆರೋಗ್ಯ ನಿಧಿ' : 'Health Fund'}</h3>
                <p className={`text-tulu-coffee-brown leading-relaxed ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' 
                    ? 'ಅಶಕ್ತರಿಗೆ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಮತ್ತು ಆರೋಗ್ಯ ಸೇವೆಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು'
                    : 'Medical assistance for the needy and financial support for health services'
                  }
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-tulu-terracotta/10 to-tulu-golden-yellow/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group animate-zoom-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-tulu-terracotta to-tulu-golden-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow">
                  <GraduationCap className="h-10 w-10 text-white group-hover:animate-bounce" />
                </div>
                <h3 className={`text-xl font-bold text-tulu-almost-black mb-4 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>{language === 'kannada' ? 'ವಿದ್ಯಾನಿಧಿ' : 'Education Fund'}</h3>
                <p className={`text-tulu-coffee-brown leading-relaxed ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' 
                    ? 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಿಕ್ಷಣ ಸಹಾಯ ಮತ್ತು ಶಾಲಾ ಕೊಠಡಿ ನಿರ್ಮಾಣಕ್ಕೆ ₹1.8 ಲಕ್ಷ ದಾನ'
                    : 'Educational assistance for students and ₹1.8 lakh donation for school room construction'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tulunadu Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-tulu-golden-yellow via-orange-300 to-yellow-200 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                {language === 'kannada' ? 'ನಮ್ಮ ತುಳುನಾಡು' : 'Our Tulunadu'}
              </h2>
              <div className="absolute -top-4 -right-8 text-6xl md:text-7xl animate-pulse">
                ❤️
              </div>
            </div>
            
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-orange-100 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                {language === 'kannada' 
                  ? <span className="font-kannada text-xl">'ಸಂಸ್ಕೃತಿ... ಭಾಷೆ... ಸೇವೆ.. ಕ್ರೀಡೆ.. ಈ ವಿಚಾರಗಳನ್ನು ರಾಜಧಾನಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪಸರಿಸುವ ಜೊತೆಗೆ ಇಲ್ಲಿರುವ ತುಳುವರನ್ನು ಒಟ್ಟುಗೂಡಿಸುವುದೇ ನಮ್ಮ ಮೂಲ ಧ್ಯೇಯ.'</span>
                  : 'Culture... Language... Service... Sports... Spreading these values in the capital city of Bengaluru while uniting all Tuluvas is our core mission'
                }
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-tulu-golden-yellow to-transparent rounded-full animate-fade-in-up" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar - Mangalore Style */}
      <section className="py-12 bg-gradient-to-r from-tulu-almost-black via-tulu-deep-maroon to-tulu-rustic-red animate-slide-in-up" data-animate id="stats">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group animate-fade-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-125 group-hover:text-tulu-golden-yellow transition-all duration-500 animate-glow">
                  {stat.number}
                </div>
                <div className={`text-tulu-warm-grey font-medium text-sm md:text-base ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Posters Grid - Mangalore Style */}
      <section className="py-16 bg-gradient-to-br from-tulu-warm-grey/10 to-tulu-golden-yellow/10" data-animate id="events">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Upcoming Events Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-tulu-almost-black mb-4 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                {language === 'kannada' ? 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು' : 'Upcoming Events'}
              </h2>
              <p className={`text-xl text-tulu-coffee-brown ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                {language === 'kannada' ? 'ನಮ್ಮ ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳ ಪೋಸ್ಟರ್‌ಗಳು' : 'Posters of Our Upcoming Events'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Event Poster 1 */}
              <div className="rounded-2xl aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Up%20comming%20events/E7.PNG"
                  alt="Upcoming Event 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Event Poster 2 */}
              <div className="rounded-2xl aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-zoom-in" style={{animationDelay: '0.2s'}}>
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Up%20comming%20events/E2.jpg"
                  alt="Upcoming Event 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Event Poster 3 */}
              <div className="rounded-2xl aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-zoom-in" style={{animationDelay: '0.4s'}}>
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Up%20comming%20events/E3.jpeg"
                  alt="Upcoming Event 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Event Poster 4 */}
              <div className="rounded-2xl aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-zoom-in" style={{animationDelay: '0.6s'}}>
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Up%20comming%20events/E4.jpeg"
                  alt="Upcoming Event 4"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Event Poster 5 */}
              <div className="rounded-2xl aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-zoom-in" style={{animationDelay: '0.8s'}}>
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Up%20comming%20events/E5.jpeg"
                  alt="Upcoming Event 5"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Event Poster 6 */}
              <div className="rounded-2xl aspect-[3/4] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-zoom-in" style={{animationDelay: '1s'}}>
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Up%20comming%20events/E8.PNG"
                  alt="Upcoming Event 6"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full px-4 sm:px-6 lg:px-8 mt-16">
            <div className="border-t border-tulu-warm-grey/20"></div>
          </div>
        </div>
      </section>

      {/* Event Posters Grid - Mangalore Style */}
      <section className="py-16 bg-white" data-animate id="our-events">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-tulu-almost-black mb-4 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>{currentContent.eventsTitle}</h2>
            <p className={`text-xl text-tulu-coffee-brown ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>{currentContent.eventsSubtitle}</p>
          </div>

          {/* Professional Event Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Event Video 1 */}
            <div className="relative rounded-2xl aspect-video overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Events/SaveVid.Net_AQMjEo05PE4uixHJrFU3fFAnJzUbV3Ho_K-3-wIuG547JxFEOzaBth3Wl0MRZc-3dGmqQvJjxGxrVCiPNuXi4m2FhvF0ucRpUoGaFBk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className={`text-lg font-bold mb-1 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ' : 'Cultural Event'}
                </h3>
                <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' ? 'TJB ಮಹೋತ್ಸವ' : 'TJB Festival'}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Event Video 2 */}
            <div className="relative rounded-2xl aspect-video overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Events/SaveVid.Net_AQMsF2SwDWg3_ExXyhIu6zwcPN5vKUuVSGKC2fnFY0JvdyK3TLUuHysdq3i9WqiLQbCl1OsWov5eqLtkk4GqybSu8X0c8gT_BBCqcGA.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className={`text-lg font-bold mb-1 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಕ್ರೀಡಾ ಕಾರ್ಯಕ್ರಮ' : 'Sports Event'}
                </h3>
                <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' ? 'TJB ಪ್ರೀಮಿಯರ್ ಲೀಗ್' : 'TJB Premier League'}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Event Video 3 */}
            <div className="relative rounded-2xl aspect-video overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Events/SaveVid.Net_AQObPa5dAD-cnFTh82aeitep7K7zashFljtXIWqH16JTImGtZNY9TjCYiXx0itQDkqBwWzbguyJK7YngKwRpRvDgHAI_0epf41gFMMw%20(1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className={`text-lg font-bold mb-1 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮ' : 'Community Event'}
                </h3>
                <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' ? 'ಸಾಮೂಹಿಕ ಸಭೆ' : 'Community Gathering'}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Event Video 4 */}
            <div className="relative rounded-2xl aspect-video overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Events/SaveVid.Net_AQOdTOIwyPGb0C8X-9_es2LJDG9I6W-nbFj_iWXKs2Co2ALWv_QJZSPBN_SKe7MLmPkFfnclMyDK34_sPMt1AaDCuGdTABTLWZk97vw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className={`text-lg font-bold mb-1 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಯುವ ಕಾರ್ಯಕ್ರಮ' : 'Youth Event'}
                </h3>
                <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' ? 'ನಲಿಪು ನವಿಲೇ' : 'Nalipu Navile'}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Event Video 5 */}
            <div className="relative rounded-2xl aspect-video overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Events/SaveVid.Net_AQPzfDqmX_ZscwHTqkffMYDDZXU8FvTx7Jki2TvOczm-YmZ9c2t7MjlDIV0OTxEgedN8t-X0slngBNepmMN9EWIyIFvYJFyy570_5cg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className={`text-lg font-bold mb-1 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮ' : 'Special Event'}
                </h3>
                <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ' : 'Aisiri Mahotsava'}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* View All Events Card */}
            <div className="relative rounded-2xl aspect-video overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group bg-gradient-to-br from-tulu-rustic-red to-tulu-bold-red flex items-center justify-center cursor-pointer">
              <div className="text-center text-white p-6">
                <Calendar className="h-16 w-16 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className={`text-xl font-bold mb-2 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು' : 'All Events'}
                </h3>
                <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                  {language === 'kannada' ? 'ಇನ್ನಷ್ಟು ನೋಡಿ' : 'View More'}
                </p>
                <ArrowRight className="h-6 w-6 mx-auto mt-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section - Mangalore Style */}
      <section className="py-16 bg-gradient-to-br from-tulu-warm-grey/5 to-tulu-golden-yellow/5" data-animate id="gallery">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold text-tulu-almost-black mb-2 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>{currentContent.videoGallery}</h2>
              <p className={`text-xl text-tulu-coffee-brown ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>{currentContent.gallerySubtitle}</p>
            </div>
            <Link 
              to="/gallery"
              className={`px-6 py-3 bg-gradient-to-r from-tulu-rustic-red to-tulu-bold-red text-white rounded-full font-semibold hover:from-tulu-bold-red hover:to-tulu-deep-maroon transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
            >
              <span>{currentContent.exploreAllVideos}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="relative rounded-xl aspect-video overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/AISIRA%202025%203.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className={`font-semibold text-sm bg-black/50 px-2 py-1 rounded ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಐಸಿರ 2025' : 'Aisiri 2025'}
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-xl aspect-video overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/SaveVid.Net_AQMG_V2F_udK0ef6ez5Bmqmyb8Gwc7fsJQ87lUIhOnovz2CdmtHRrHTWAqyFjyyJ-D3e_KKRUq6AZeGQsih71yREzMHgXybbdFF2Pk8.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className={`font-semibold text-sm bg-black/50 px-2 py-1 rounded ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ' : 'Cultural Program'}
                </p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative rounded-xl aspect-video overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/SaveVid.Net_AQNdIEBiK59N8R8ruGqelspPjYugyT5JeTRl3Jy685Y3PVFVWBNXevV0np8Pk_OFUD0_xo_JbEttS4AsVZC85lkDGjVYwzZ6n0EUCKA.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className={`font-semibold text-sm bg-black/50 px-2 py-1 rounded ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                  {language === 'kannada' ? 'ಸೇವಾ ಕಾರ್ಯ' : 'Service Activity'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Traditional Mangalore Style */}
      <section className="py-16 bg-gradient-to-br from-tulu-golden-yellow/10 via-tulu-warm-taupe/5 to-tulu-terracotta/10" data-animate id="photo-gallery">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold text-tulu-almost-black mb-2 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                {language === 'kannada' ? 'ಫೋಟೋ ಗ್ಯಾಲರಿ' : 'Photo Gallery'}
              </h2>
              <p className={`text-xl text-tulu-coffee-brown ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                {language === 'kannada' ? 'ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸೇವಾ ಕಾರ್ಯಗಳ ಚಿತ್ರಗಳು' : 'Images from our cultural and service activities'}
              </p>
            </div>
            <Link 
              to="/gallery"
              className={`px-6 py-3 bg-gradient-to-r from-tulu-golden-yellow to-tulu-warm-taupe text-white rounded-full font-semibold hover:from-tulu-warm-taupe hover:to-tulu-terracotta transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
            >
              <span>{language === 'kannada' ? 'ಎಲ್ಲಾ ಫೋಟೋಗಳನ್ನು ನೋಡಿ' : 'View All Photos'}</span>
              <Camera className="h-4 w-4" />
            </Link>
          </div>

          {/* Traditional Photo Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Featured Photo */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/P1.PNG"
                  alt="Featured Cultural Event"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tulu-almost-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className={`text-xl font-bold mb-2 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                    {language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಮಹೋತ್ಸವ' : 'Cultural Festival'}
                  </h3>
                  <p className={`text-sm opacity-90 ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
                    {language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2024' : 'Aisiri Mahotsava 2024'}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-tulu-golden-yellow/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Traditional Photo Grid */}
            {[
              { src: "https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p2.PNG", title: language === 'kannada' ? 'ಸೇವಾ ಕಾರ್ಯ' : 'Service Activity' },
              { src: "https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p3.PNG", title: language === 'kannada' ? 'ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮ' : 'Community Program' },
              { src: "https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p4.PNG", title: language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ನೃತ್ಯ' : 'Cultural Dance' },
              { src: "https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p5.PNG", title: language === 'kannada' ? 'ಯುವ ಸಂಗಮ' : 'Youth Gathering' },
              { src: "https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p6.PNG", title: language === 'kannada' ? 'ಪ್ರಶಸ್ತಿ ವಿತರಣೆ' : 'Award Ceremony' },
              { src: "https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p7.PNG", title: language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಪ್ರದರ್ಶನ' : 'Cultural Performance' }
            ].map((photo, index) => (
              <div key={index} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tulu-almost-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className={`text-xs font-medium ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
                    {photo.title}
                  </p>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-3 w-3 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Traditional Decorative Border */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-tulu-golden-yellow"></div>
              <div className="w-3 h-3 bg-tulu-golden-yellow rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-tulu-warm-taupe rounded-full"></div>
              <div className="w-3 h-3 bg-tulu-terracotta rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-tulu-terracotta"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media Links - Mangalore Style */}
      <section className="py-8 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold text-tulu-almost-black mb-4 ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}>
              {language === 'kannada' ? 'ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ' : 'Follow Us'}
            </h2>
            <p className={`text-lg text-tulu-coffee-brown ${language === 'kannada' ? 'font-kannada' : 'font-body'}`}>
              {language === 'kannada' ? 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ' : 'Stay connected with us on social media'}
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=100082324188519&rdid=2fvNPDgzkD4GPHeW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14J9RhkxZcc%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-500 hover:bg-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="h-6 w-6 text-white" />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/tulunada_jawaner_bengaluru_r"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-pink-500 hover:bg-pink-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="h-6 w-6 text-white" />
            </a>

            {/* Twitter/X */}
            <a 
              href="https://x.com/TJBOfficial?t=mcLLbrnszg4skzEzA6mEIg&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-black rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="h-6 w-6 text-white" />
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@tulunadajawanerbengalurur6436"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-500 hover:bg-red-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Youtube className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;