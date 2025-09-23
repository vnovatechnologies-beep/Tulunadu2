import React from 'react';
import { Users, Heart, Target, Eye, Award, Calendar } from 'lucide-react';

function AboutPage({ language }) {
  const content = {
    kannada: {
      title: 'ನಮ್ಮ ಬಗ್ಗೆ',
      subtitle: 'ತುಳುನಾಡ ಜವನೆರ್ ಬೆಂಗಳೂರು (ರಿ) ನ ಪ್ರಯಾಣ',
      
      // Main content from client
      mainContent: `ಸಂಸ್ಕೃತಿ... ಭಾಷೆ...ಸೇವೆ.. ಕ್ರೀಡೆ.. ಈ ವಿಚಾರಗಳನ್ನು ರಾಜಧಾನಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪಸರಿಸುವ ಜೊತೆಗೆ ಇಲ್ಲಿರುವ ತುಳುವರನ್ನು ಒಟ್ಟುಗೂಡಿಸುವುದೇ ತುಳುನಾಡ ಜವನೆರ್ ಬೆಂಗಳೂರು(ರಿ) ನ ಮೂಲ ಧೈಯ..

ತುಳುನಾಡ ಜವನೆರ್ ಬೆಂಗಳೂರು (ರಿ) ಕಳೆದ 7 ವರ್ಷಗಳಿಂದ ತನ್ನದೇ ಆದ ವಿಶಿಷ್ಟ ಕಾರ್ಯಶೈಲಿಯ ಮೂಲಕ ಬೆಂಗಳೂರಿನಲ್ಲಿರುವ ತುಳುನಾಡಿನ ಜನರನ್ನು ಆಕರ್ಷಿಸಿ ಸಂಘಟಿಸಿ ಯಶಸ್ವಿಯಾಗಿ ಬಾನೆತ್ತರಕ್ಕೆ ಏರುವ ಮೂಲಕ ಬಲಿಷ್ಟ ಹಾಗೂ ಅತೀ ಹೆಚ್ಚು ಸದಸ್ಯರನ್ನು ಹೊಂದಿರುವ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ.

ಮಂಗಳೂರು, ಉಡುಪಿ, ಕಾಸರಗೋಡು ಜಿಲ್ಲೆ ಸೇರಿದಂತೆ ಇತರೆಡೆ ಪಸರಿರುವ ತುಳುವರನ್ನು ರಾಜಧಾನಿಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸುವ ಪ್ರಯತ್ನ ಸದಾ ನಿರಂತರ, ತುಳುವಿಗೆ ಪ್ರಾಧಾನ್ಯತೆ ಹಾಗೂ ಭಾಷಾ ಗೌರವ ನಮ್ಮ ಪ್ರಮುಖ ಗುರಿಗಳಲ್ಲಿ ಒಂದು. ತುಳು ಭಾಷಾ ಪ್ರಾಧಾನ್ಯತೆಗೆ ಪ್ರಧಾನಿಗೆ 5000 ಪೋಸ್ಟ್ ಕಾರ್ಡ್ ಅಭಿಯಾನ ನಡೆಸಿದ ಹೆಮ್ಮೆ ನಮ್ಮದು.`,

      missionTitle: 'ನಮ್ಮ ಧ್ಯೇಯ',
      missionText: 'ಬೆಂಗಳೂರಿನಲ್ಲಿರುವ ತುಳುವರನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ತುಳು ಸಂಸ್ಕೃತಿ, ಭಾಷೆ, ಸೇವೆ ಮತ್ತು ಕ್ರೀಡೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡುವುದು',
      
      visionTitle: 'ನಮ್ಮ ದೃಷ್ಟಿ',
      visionText: 'ತುಳು ಸಂಸ್ಕೃತಿ ಮತ್ತು ಭಾಷೆಯನ್ನು ಸಂರಕ್ಷಿಸಿ ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ವರ್ಗಾಯಿಸುವುದು',
      
      valuesTitle: 'ನಮ್ಮ ಮೌಲ್ಯಗಳು',
      values: [
        'ಸಂಸ್ಕೃತಿ ಸಂರಕ್ಷಣೆ',
        'ಭಾಷಾ ಗೌರವ',
        'ಸಮಾಜ ಸೇವೆ',
        'ಕ್ರೀಡಾ ಪ್ರೋತ್ಸಾಹ'
      ],
      
      achievementsTitle: 'ನಮ್ಮ ಸಾಧನೆಗಳು',
      achievements: [
        '5000+ ಸದಸ್ಯರ ಬಲಿಷ್ಟ ಸಂಘಟನೆ',
        '7 ವರ್ಷಗಳ ಯಶಸ್ವಿ ಪ್ರಯಾಣ',
        'ತುಳು ಭಾಷೆಗಾಗಿ 5000 ಪೋಸ್ಟ್ ಕಾರ್ಡ್ ಅಭಿಯಾನ',
        '100+ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಕ್ರೀಡಾ ಕಾರ್ಯಕ್ರಮಗಳು'
      ]
    },
    
    english: {
      title: 'About Us',
      subtitle: 'Journey of Tulu Nadu Javaner Bengaluru (R)',
      
      mainContent: `Culture… Language… Service… Sports… Spreading these values in the capital city of Bengaluru while uniting all Tuluvas is the core mission of Tulu Nadu Javaner Bengaluru ®.

For the past 7 years, with a unique style of functioning, TJB has attracted and organized Tuluvas in Bengaluru, successfully growing into one of the strongest organizations with maximum members.

Continuously working to unite Tuluvas from Mangaluru, Udupi, Kasaragod districts and other places in the capital city. Giving prominence to Tulu language and language pride is one of our main goals. We are proud to have conducted a 5000 postcard campaign to the Prime Minister for Tulu language prominence.`,

      missionTitle: 'Our Mission',
      missionText: 'To unite Tuluvas in Bengaluru and promote Tulu culture, language, service and sports',
      
      visionTitle: 'Our Vision',
      visionText: 'To preserve Tulu culture and language and pass it on to future generations',
      
      valuesTitle: 'Our Values',
      values: [
        'Cultural Preservation',
        'Language Pride',
        'Social Service',
        'Sports Promotion'
      ],
      
      achievementsTitle: 'Our Achievements',
      achievements: [
        '5000+ strong member organization',
        '7 years of successful journey',
        '5000 postcard campaign for Tulu language',
        '100+ cultural and sports programs'
      ]
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
            <div className="prose prose-lg max-w-none">
              {currentContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className={`leading-relaxed mb-6 text-justify ${language === 'kannada' ? 'text-gray-800 font-kannada text-lg' : 'text-gray-700'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.missionTitle}</h3>
                <p className={`leading-relaxed ${language === 'kannada' ? 'text-gray-700 font-kannada text-base' : 'text-gray-600'}`}>
                  {currentContent.missionText}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.visionTitle}</h3>
                <p className={`leading-relaxed ${language === 'kannada' ? 'text-gray-700 font-kannada text-base' : 'text-gray-600'}`}>
                  {currentContent.visionText}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.valuesTitle}</h3>
                <ul className={`space-y-2 ${language === 'kannada' ? 'text-gray-700 font-kannada text-base' : 'text-gray-600'}`}>
                  {currentContent.values.map((value, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default AboutPage;