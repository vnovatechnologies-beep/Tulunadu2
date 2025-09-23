import React from 'react';
import { ArrowRight, Users, Heart, Calendar, Award, Droplets, GraduationCap, HandHeart } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';

function HomePage({ language }) {
  const content = {
    kannada: {
      heroTitle: 'ತುಳುನಾಡ ಜವನೆರ್ ಬೆಂಗಳೂರು ®',
      heroSubtitle: 'ಸಂಸ್ಕೃತಿ... ಭಾಷೆ... ಸೇವೆ.. ಕ್ರೀಡೆ..',
      heroDescription: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ತುಳು ಸಂಸ್ಕೃತಿ, ಭಾಷೆ, ಸೇವೆ ಮತ್ತು ಕ್ರೀಡೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡುವ ಸಂಸ್ಥೆ',
      
      services: {
        title: 'ನಮ್ಮ ಸೇವೆಗಳು',
        bloodDonation: {
          title: 'ರಕ್ತದಾನ',
          description: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ರಕ್ತದ ಅವಶ್ಯಕತೆಗಳಿಗೆ ಸ್ಪಂದಿಸಿ ರಕ್ತದಾನ ಅಭಿಯಾನ... ನಮ್ಮ 8 ಎಗ್ಗೆಗಳ ಮೂಲಕ ಅಲ್ಲಿನ ಸದಸ್ಯರ ಸಹಾಯದಿಂದ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳಿಗೆ ರಕ್ತ ಪೂರೈಕೆ'
        },
        healthFund: {
          title: 'ಆರೋಗ್ಯ ನಿಧಿ',
          description: 'ನಮ್ಮ ಸಂಸ್ಥೆಯ ಸದಸ್ಯರಿಗೆ ಯಾವುದೇ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಾದಲ್ಲಿ ನಮ್ಮಿಂದ ಆರೋಗ್ಯ ನಿಧಿ ಯೋಜನೆ. ಯುವಶಕ್ತಿ ಸೇವಾಪಥದ ಮೂಲಕ ಇಲ್ಲಿಯವರೆಗೆ 5 ಲಕ್ಷಕ್ಕೂ ಮಿಕ್ಕ ಆರೋಗ್ಯಸೇವಾನಿಧಿ ಹಸ್ತಾಂತರ..'
        },
        educationFund: {
          title: 'ವಿದ್ಯಾನಿಧಿ',
          description: 'ತುಳುನಾಡಿನ ಮಂಗಳೂರು‌.ಉಡುಪಿ..ಕಾಸರಗೋಡು ವಲಯದ ಊರಿನ ತೀರಾ ಹಳ್ಳಿ ವಲಯದ ಸರ್ಕಾರಿ ಶಾಲೆಗಳಿಗೆ ನಮ್ಮಿಂದಾಗುವ ಅಗತ್ಯ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳನ್ನು ಒದಗಿಸುವ ವಿದ್ಯಾನಿಧಿ ಯೋಜನೆಗಳು. ಪ್ರತಿ ವರ್ಷ ಐಸಿರ ಕಾರ್ಯಕ್ರಮದ ಸಂಗ್ರಹಿತ ಮೊತ್ತದಲ್ಲಿ ಒಂದಂಶ ವಿದ್ಯಾನಿಧಿಗೆ ಮೀಸಲು.'
        }
      }
    },
    
    english: {
      heroTitle: 'Tulu Nadu Javaner Bengaluru ®',
      heroSubtitle: 'Culture... Language... Service... Sports..',
      heroDescription: 'Organization promoting Tulu culture, language, service and sports in Bengaluru',
      
      services: {
        title: 'Our Services',
        bloodDonation: {
          title: 'Blood Donation',
          description: 'Blood donation campaigns responding to blood requirements in Bengaluru... Blood supply to nearby hospitals with the help of members through our 8 units'
        },
        healthFund: {
          title: 'Health Fund',
          description: 'Health fund scheme from us for any health problems of our organization members. Over 5 lakh health service fund handed over through Yuvashakti Sevapath..'
        },
        educationFund: {
          title: 'Education Fund',
          description: 'Education fund schemes providing necessary basic facilities to government schools in rural areas of Mangaluru, Udupi, Kasaragod districts of Tulunad. A portion of the amount collected from Aisiri program every year is reserved for education fund.'
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel language={language} />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {currentContent.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blood Donation */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{currentContent.services.bloodDonation.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {currentContent.services.bloodDonation.description}
                </p>
              </div>
            </div>

            {/* Health Fund */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{currentContent.services.healthFund.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {currentContent.services.healthFund.description}
                </p>
              </div>
            </div>

            {/* Education Fund */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{currentContent.services.educationFund.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {currentContent.services.educationFund.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;