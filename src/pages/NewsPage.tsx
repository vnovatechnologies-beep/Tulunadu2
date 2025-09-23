import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

function NewsPage({ language }) {
  const content = {
    kannada: {
      title: 'ಮಾಹಿತಿಗಳು',
      subtitle: 'ತಾಜಾ ಸುದ್ದಿಗಳು ಮತ್ತು ಅಪ್‌ಡೇಟ್‌ಗಳು',
      readMore: 'ಇನ್ನಷ್ಟು ಓದಿ',
      author: 'ಲೇಖಕ',
      publishedOn: 'ಪ್ರಕಟಿಸಲಾಗಿದೆ',
      category: 'ವರ್ಗ',
      
      categories: [
        'ಎಲ್ಲಾ',
        'ಕಾರ್ಯಕ್ರಮಗಳು',
        'ಸೇವಾ ಕಾರ್ಯಗಳು',
        'ಸಾಂಸ್ಕೃತಿಕ',
        'ಕ್ರೀಡೆ',
        'ಸಮುದಾಯ'
      ],
      
      news: [
        {
          title: 'ಐಸಿರ ಮಹೋತ್ಸವ 2025 ಘೋಷಣೆ',
          excerpt: 'ಬೆಂಗಳೂರಿನ ಅತಿದೊಡ್ಡ ತುಳು ಸಾಂಸ್ಕೃತಿಕ ಮಹೋತ್ಸವ ಐಸಿರ 2025 ಡಿಸೆಂಬರ್‌ನಲ್ಲಿ ನಡೆಯಲಿದೆ. ಈ ವರ್ಷ 25,000+ ಭಾಗವಹಿಸುವವರನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ.',
          date: 'ಜನವರಿ 15, 2025',
          author: 'TJB ಟೀಮ್',
          category: 'ಕಾರ್ಯಕ್ರಮಗಳು',
          readTime: '3 ನಿಮಿಷ'
        },
        {
          title: 'ರಕ್ತದಾನ ಶಿಬಿರದಲ್ಲಿ ದಾಖಲೆ ಸಂಗ್ರಹ',
          excerpt: 'ಕಳೆದ ವಾರ ನಡೆದ ರಕ್ತದಾನ ಶಿಬಿರದಲ್ಲಿ 500+ ಯುನಿಟ್ ರಕ್ತ ಸಂಗ್ರಹವಾಗಿದೆ. ಇದು TJB ಇತಿಹಾಸದಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು.',
          date: 'ಜನವರಿ 10, 2025',
          author: 'ಸೇವಾ ಸಮಿತಿ',
          category: 'ಸೇವಾ ಕಾರ್ಯಗಳು',
          readTime: '2 ನಿಮಿಷ'
        },
        {
          title: 'ನಲಿಪು ನವಿಲೇ ಸೀಸನ್ 04 ನೋಂದಣಿ ಆರಂಭ',
          excerpt: 'ತುಳು ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಭೆಗಳಿಗಾಗಿ ನಲಿಪು ನವಿಲೇ ಸೀಸನ್ 04 ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆ ಆರಂಭವಾಗಿದೆ. ಮಾರ್ಚ್ 31 ರವರೆಗೆ ನೋಂದಣಿ.',
          date: 'ಜನವರಿ 8, 2025',
          author: 'ಸಾಂಸ್ಕೃತಿಕ ಸಮಿತಿ',
          category: 'ಸಾಂಸ್ಕೃತಿಕ',
          readTime: '4 ನಿಮಿಷ'
        },
        {
          title: 'ಶಾಲಾ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ ಪೂರ್ಣಗೊಂಡಿತು',
          excerpt: 'ಮಂಗಳೂರು ಮತ್ತು ಉಡುಪಿ ಜಿಲ್ಲೆಯ 2 ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ₹1.8 ಲಕ್ಷ ವೆಚ್ಚದಲ್ಲಿ ಕೊಠಡಿ ನಿರ್ಮಾಣ ಪೂರ್ಣಗೊಂಡಿದೆ.',
          date: 'ಜನವರಿ 5, 2025',
          author: 'ಶಿಕ್ಷಣ ಸಮಿತಿ',
          category: 'ಸೇವಾ ಕಾರ್ಯಗಳು',
          readTime: '3 ನಿಮಿಷ'
        },
        {
          title: 'TJB ಪ್ರೀಮಿಯರ್ ಲೀಗ್ 2025 ಟೀಮ್ ಆಯ್ಕೆ',
          excerpt: 'ಏಪ್ರಿಲ್‌ನಲ್ಲಿ ನಡೆಯಲಿರುವ TJB ಪ್ರೀಮಿಯರ್ ಲೀಗ್‌ಗಾಗಿ 16 ಟೀಮ್‌ಗಳ ಆಯ್ಕೆ ಪ್ರಕ್ರಿಯೆ ಆರಂಭವಾಗಿದೆ.',
          date: 'ಜನವರಿ 3, 2025',
          author: 'ಕ್ರೀಡಾ ಸಮಿತಿ',
          category: 'ಕ್ರೀಡೆ',
          readTime: '2 ನಿಮಿಷ'
        },
        {
          title: 'ಸದಸ್ಯತ್ವ 5000 ಮೈಲಿಗಲ್ಲು ದಾಟಿತು',
          excerpt: 'TJB ಸದಸ್ಯತ್ವ ಸಂಖ್ಯೆ 5000 ದಾಟಿದೆ. ಇದು ಸಂಸ್ಥೆಯ ಇತಿಹಾಸದಲ್ಲಿ ಮಹತ್ವದ ಮೈಲಿಗಲ್ಲು.',
          date: 'ಡಿಸೆಂಬರ್ 28, 2024',
          author: 'TJB ಆಡಳಿತ',
          category: 'ಸಮುದಾಯ',
          readTime: '3 ನಿಮಿಷ'
        }
      ]
    },
    
    english: {
      title: 'News',
      subtitle: 'Latest news and updates',
      readMore: 'Read More',
      author: 'Author',
      publishedOn: 'Published on',
      category: 'Category',
      
      categories: [
        'All',
        'Events',
        'Service',
        'Cultural',
        'Sports',
        'Community'
      ],
      
      news: [
        {
          title: 'Aisiri Mahotsava 2025 Announcement',
          excerpt: 'Bengaluru\'s biggest Tulu cultural festival Aisiri 2025 will be held in December. This year, 25,000+ participants are expected.',
          date: 'January 15, 2025',
          author: 'TJB Team',
          category: 'Events',
          readTime: '3 min read'
        },
        {
          title: 'Record Collection at Blood Donation Camp',
          excerpt: 'Last week\'s blood donation camp collected 500+ units of blood. This is the highest in TJB history.',
          date: 'January 10, 2025',
          author: 'Service Committee',
          category: 'Service',
          readTime: '2 min read'
        },
        {
          title: 'Nalipu Navile Season 04 Registration Opens',
          excerpt: 'Registration process for Nalipu Navile Season 04 for Tulu cultural talents has begun. Registration until March 31.',
          date: 'January 8, 2025',
          author: 'Cultural Committee',
          category: 'Cultural',
          readTime: '4 min read'
        },
        {
          title: 'School Infrastructure Development Project Completed',
          excerpt: 'Room construction completed at 2 government schools in Mangaluru and Udupi districts at a cost of ₹1.8 lakhs.',
          date: 'January 5, 2025',
          author: 'Education Committee',
          category: 'Service',
          readTime: '3 min read'
        },
        {
          title: 'TJB Premier League 2025 Team Selection',
          excerpt: 'Selection process for 16 teams for TJB Premier League to be held in April has begun.',
          date: 'January 3, 2025',
          author: 'Sports Committee',
          category: 'Sports',
          readTime: '2 min read'
        },
        {
          title: 'Membership Crosses 5000 Milestone',
          excerpt: 'TJB membership has crossed 5000. This is a significant milestone in the organization\'s history.',
          date: 'December 28, 2024',
          author: 'TJB Administration',
          category: 'Community',
          readTime: '3 min read'
        }
      ]
    }
  };

  const currentContent = content[language];
  const [selectedCategory, setSelectedCategory] = React.useState(currentContent.categories[0]);

  const filteredNews = selectedCategory === currentContent.categories[0] 
    ? currentContent.news 
    : currentContent.news.filter(item => item.category === selectedCategory);

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

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {currentContent.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((newsItem, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Calendar className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">{newsItem.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {newsItem.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                    {newsItem.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {newsItem.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{newsItem.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{newsItem.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{newsItem.date}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300">
                      <span>{currentContent.readMore}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'kannada' ? 'ವಿಶೇಷ ಸುದ್ದಿಗಳು' : 'Featured News'}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 text-white">
                <div className="flex items-center mb-4">
                  <Tag className="h-6 w-6 mr-2" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {language === 'kannada' ? 'ವಿಶೇಷ' : 'Featured'}
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
                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  {currentContent.readMore}
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === 'kannada' ? 'ಸುದ್ದಿಪತ್ರ ಚಂದಾದಾರಿಕೆ' : 'Newsletter Subscription'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'kannada' 
              ? 'ತಾಜಾ ಸುದ್ದಿಗಳು ಮತ್ತು ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು ನಿಮ್ಮ ಇಮೇಲ್‌ನಲ್ಲಿ ಪಡೆಯಿರಿ'
              : 'Get latest news and updates in your email'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'kannada' ? 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ' : 'Your email address'}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
              {language === 'kannada' ? 'ಚಂದಾದಾರರಾಗಿ' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;