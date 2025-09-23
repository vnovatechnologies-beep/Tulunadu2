import React from 'react';
import { Droplets, Heart, GraduationCap, HandHeart, Users, Home, Award, CheckCircle } from 'lucide-react';

function ServicesPage({ language }) {
  const content = {
    kannada: {
      title: 'ಸೇವಾ ಪಥ',
      subtitle: 'ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ನಮ್ಮ ಕೊಡುಗೆ',
      
      mainContent: `ಸೇವಾ ಕಾರ್ಯಗಳಾಗಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಆಸ್ಪತ್ರೆಗಳಿಗೆ ರಕ್ತದಾನ, ಅಶಕ್ತರಿಗೆ ಆರೋಗ್ಯ ನಿಧಿ, ಅನಾಥಾಶ್ರಮಗಳಿಗೆ ವಸ್ತ್ರದಾನ, ಅಗತ್ಯ ಸಾಮಾಗ್ರಿಗಳ ಪೂರೈಕೆ, ಗೋಸಂರಕ್ಷಣೆಗೆ ಗೋನಿಧಿ ಹಾಗೂ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾನಿಧಿ ಯೋಜನೆಯ ಮಂಗಳೂರು ಹಾಗೂ ಉಡುಪಿ ಜಿಲ್ಲೆಯ 2 ಸರ್ಕಾರಿ ಶಾಲೆಗಳಿಗೆ ಕೊಠಡಿ ನಿರ್ಮಾಣ ಹಾಗೂ ಲೈಬ್ರರಿಗಾಗಿ 1 ಲಕ್ಷ 80 ಸಾವಿರ ನೀಡಿದ್ದು ಇದು ಸೇವಾಕಾರ್ಯಕ್ಕೆ ಹಿಡಿದ ಕೈಗನ್ನಡಿ.`,
      
      services: [
        {
          title: 'ರಕ್ತದಾನ ಶಿಬಿರಗಳು',
          description: 'ಬೆಂಗಳೂರಿನ ಆಸ್ಪತ್ರೆಗಳಿಗೆ ನಿಯಮಿತ ರಕ್ತದಾನ ಶಿಬಿರಗಳನ್ನು ಆಯೋಜಿಸುತ್ತೇವೆ. ಅಗತ್ಯವಿರುವವರಿಗೆ ತಕ್ಷಣ ರಕ್ತ ಪೂರೈಕೆ ಮಾಡುತ್ತೇವೆ.',
          icon: Droplets,
          color: 'from-red-400 to-red-600',
          bgColor: 'from-red-50 to-red-100'
        },
        {
          title: 'ಆರೋಗ್ಯ ನಿಧಿ',
          description: 'ಅಶಕ್ತರು ಮತ್ತು ಆರ್ಥಿಕವಾಗಿ ದುರ್ಬಲರಿಗೆ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಮತ್ತು ಆರೋಗ್ಯ ಸೇವೆಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು ನೀಡುತ್ತೇವೆ.',
          icon: Heart,
          color: 'from-pink-400 to-pink-600',
          bgColor: 'from-pink-50 to-pink-100'
        },
        {
          title: 'ವಿದ್ಯಾನಿಧಿ ಯೋಜನೆ',
          description: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಿಕ್ಷಣ ಸಹಾಯ ಮತ್ತು ಶಾಲಾ ಕೊಠಡಿ ನಿರ್ಮಾಣಕ್ಕೆ ₹1.8 ಲಕ್ಷ ದಾನ ಮಾಡಿದ್ದೇವೆ.',
          icon: GraduationCap,
          color: 'from-blue-400 to-blue-600',
          bgColor: 'from-blue-50 to-blue-100'
        },
        {
          title: 'ವಸ್ತ್ರದಾನ',
          description: 'ಅನಾಥಾಶ್ರಮಗಳಿಗೆ ಬಟ್ಟೆ ಮತ್ತು ಅಗತ್ಯ ವಸ್ತುಗಳ ಪೂರೈಕೆ ಮಾಡುತ್ತೇವೆ.',
          icon: HandHeart,
          color: 'from-green-400 to-green-600',
          bgColor: 'from-green-50 to-green-100'
        },
        {
          title: 'ಗೋಸಂರಕ್ಷಣೆ',
          description: 'ಗೋಶಾಲೆಗಳಿಗೆ ಗೋನಿಧಿ ಮತ್ತು ಗೋಸಂರಕ್ಷಣೆಗಾಗಿ ಆರ್ಥಿಕ ಸಹಾಯ ನೀಡುತ್ತೇವೆ.',
          icon: Home,
          color: 'from-yellow-400 to-yellow-600',
          bgColor: 'from-yellow-50 to-yellow-100'
        },
        {
          title: 'ಸಮುದಾಯ ಸೇವೆ',
          description: 'ವಿವಿಧ ಸಮುದಾಯಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳನ್ನು ನಡೆಸುತ್ತೇವೆ.',
          icon: Users,
          color: 'from-purple-400 to-purple-600',
          bgColor: 'from-purple-50 to-purple-100'
        }
      ],
      
      impactTitle: 'ನಮ್ಮ ಪ್ರಭಾವ',
      impactStats: [
        { number: '50+', label: 'ರಕ್ತದಾನ ಶಿಬಿರಗಳು' },
        { number: '₹5L+', label: 'ಆರೋಗ್ಯ ನಿಧಿ ವಿತರಣೆ' },
        { number: '₹1.8L', label: 'ಶಾಲಾ ನಿರ್ಮಾಣ ದಾನ' },
        { number: '1000+', label: 'ಸೇವೆ ಪಡೆದವರು' }
      ],
      
      joinTitle: 'ನಮ್ಮ ಸೇವಾ ಕಾರ್ಯಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ',
      joinDescription: 'ನಿಮ್ಮ ಸಮಯ, ಕೌಶಲ್ಯ ಅಥವಾ ದಾನದ ಮೂಲಕ ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ',
      contactUs: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'
    },
    
    english: {
      title: 'Seva Path',
      subtitle: 'Our Contribution to Society',
      
      mainContent: `Our service activities in Bengaluru include blood donation to hospitals, health funds for the needy, clothing donations to orphanages, supply of essential materials, cow protection funds for Goshalas, and education funds for students. We have donated ₹1.8 lakhs for classroom construction and library facilities in 2 government schools in Mangaluru and Udupi districts - this is a mirror of our service work.`,
      
      services: [
        {
          title: 'Blood Donation Camps',
          description: 'We organize regular blood donation camps for hospitals in Bengaluru. We provide immediate blood supply to those in need.',
          icon: Droplets,
          color: 'from-red-400 to-red-600',
          bgColor: 'from-red-50 to-red-100'
        },
        {
          title: 'Health Fund',
          description: 'Medical assistance and financial support for health services for the needy and economically disadvantaged.',
          icon: Heart,
          color: 'from-pink-400 to-pink-600',
          bgColor: 'from-pink-50 to-pink-100'
        },
        {
          title: 'Education Fund',
          description: 'Educational assistance for students and donated ₹1.8 lakhs for school room construction.',
          icon: GraduationCap,
          color: 'from-blue-400 to-blue-600',
          bgColor: 'from-blue-50 to-blue-100'
        },
        {
          title: 'Clothing Donation',
          description: 'Supply of clothes and essential items to orphanages and needy families.',
          icon: HandHeart,
          color: 'from-green-400 to-green-600',
          bgColor: 'from-green-50 to-green-100'
        },
        {
          title: 'Cow Protection',
          description: 'Financial assistance for Goshalas and cow protection initiatives.',
          icon: Home,
          color: 'from-yellow-400 to-yellow-600',
          bgColor: 'from-yellow-50 to-yellow-100'
        },
        {
          title: 'Community Service',
          description: 'Various community programs and social service activities for society.',
          icon: Users,
          color: 'from-purple-400 to-purple-600',
          bgColor: 'from-purple-50 to-purple-100'
        }
      ],
      
      impactTitle: 'Our Impact',
      impactStats: [
        { number: '50+', label: 'Blood Donation Camps' },
        { number: '₹5L+', label: 'Health Fund Distributed' },
        { number: '₹1.8L', label: 'School Construction Donation' },
        { number: '1000+', label: 'People Served' }
      ],
      
      joinTitle: 'Join Our Service Activities',
      joinDescription: 'Participate in social service through your time, skills or donations',
      contactUs: 'Contact Us'
    }
  };

  const currentContent = content[language];

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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              {currentContent.mainContent}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'kannada' ? 'ನಮ್ಮ ಸೇವಾ ಕ್ಷೇತ್ರಗಳು' : 'Our Service Areas'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.impactTitle}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {currentContent.impactStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-orange-200 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'kannada' ? 'ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ' : 'How We Help'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'kannada' ? 'ತಕ್ಷಣ ಸಹಾಯ' : 'Immediate Help'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {language === 'kannada' 
                      ? 'ತುರ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯ' 
                      : 'Emergency medical assistance'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {language === 'kannada' 
                      ? 'ರಕ್ತದ ತುರ್ತು ಅಗತ್ಯ' 
                      : 'Urgent blood requirements'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {language === 'kannada' 
                      ? 'ಆಹಾರ ಮತ್ತು ವಸ್ತ್ರ ವಿತರಣೆ' 
                      : 'Food and clothing distribution'
                    }
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'kannada' ? 'ದೀರ್ಘಕಾಲೀನ ಯೋಜನೆಗಳು' : 'Long-term Projects'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {language === 'kannada' 
                      ? 'ಶಾಲಾ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ' 
                      : 'School infrastructure development'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {language === 'kannada' 
                      ? 'ವಿದ್ಯಾರ್ಥಿ ವೇತನ ಯೋಜನೆಗಳು' 
                      : 'Student scholarship programs'
                    }
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {language === 'kannada' 
                      ? 'ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮಗಳು' 
                      : 'Community development programs'
                    }
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.joinTitle}</h2>
          <p className="text-xl mb-8">{currentContent.joinDescription}</p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            {currentContent.contactUs}
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;