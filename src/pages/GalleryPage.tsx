import React, { useState } from 'react';
import { Play, Camera, Video, Download, Share2, Heart, Eye } from 'lucide-react';

function GalleryPage({ language }) {
  const [activeTab, setActiveTab] = useState('photos');

  const content = {
    kannada: {
      title: 'ಗ್ಯಾಲರಿ',
      subtitle: 'ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಚಿತ್ರಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳು',
      photos: 'ಫೋಟೋಗಳು',
      videos: 'ವೀಡಿಯೊಗಳು',
      viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
      download: 'ಡೌನ್‌ಲೋಡ್',
      share: 'ಹಂಚಿಕೊಳ್ಳಿ',
      like: 'ಇಷ್ಟ',
      views: 'ವೀಕ್ಷಣೆಗಳು'
    },
    english: {
      title: 'Gallery',
      subtitle: 'Photos and videos from our programs',
      photos: 'Photos',
      videos: 'Videos',
      viewAll: 'View All',
      download: 'Download',
      share: 'Share',
      like: 'Like',
      views: 'Views'
    }
  };

  const currentContent = content[language];

  const photoCategories = [
    {
      title: language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2024' : 'Aisiri Mahotsava 2024',
      count: 150,
      thumbnail: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/P1.PNG'
    },
    {
      title: language === 'kannada' ? 'ನಲಿಪು ನವಿಲೇ ಸೀಸನ್ 03' : 'Nalipu Navile Season 03',
      count: 85,
      thumbnail: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p2.PNG'
    },
    {
      title: language === 'kannada' ? 'TJB ಪ್ರೀಮಿಯರ್ ಲೀಗ್' : 'TJB Premier League',
      count: 120,
      thumbnail: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p3.PNG'
    },
    {
      title: language === 'kannada' ? 'ರಕ್ತದಾನ ಶಿಬಿರ' : 'Blood Donation Camp',
      count: 45,
      thumbnail: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p4.PNG'
    },
    {
      title: language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು' : 'Cultural Programs',
      count: 200,
      thumbnail: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p5.PNG'
    },
    {
      title: language === 'kannada' ? 'ಸೇವಾ ಕಾರ್ಯಗಳು' : 'Service Activities',
      count: 75,
      thumbnail: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p6.PNG'
    }
  ];

  const videos = [
    {
      title: language === 'kannada' ? 'ಐಸಿರ 2025 ಹೈಲೈಟ್ಸ್' : 'Aisiri 2025 Highlights',
      duration: '2:45',
      views: '25K',
      likes: '1.2K',
      videoUrl: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/AISIRA%202025%203.mp4'
    },
    {
      title: language === 'kannada' ? 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ' : 'Cultural Program',
      duration: '3:20',
      views: '18K',
      likes: '890',
      videoUrl: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/SaveVid.Net_AQMG_V2F_udK0ef6ez5Bmqmyb8Gwc7fsJQ87lUIhOnovz2CdmtHRrHTWAqyFjyyJ-D3e_KKRUq6AZeGQsih71yREzMHgXybbdFF2Pk8.mp4'
    },
    {
      title: language === 'kannada' ? 'ಸೇವಾ ಕಾರ್ಯ' : 'Service Activity',
      duration: '4:15',
      views: '12K',
      likes: '650',
      videoUrl: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/SaveVid.Net_AQNdIEBiK59N8R8ruGqelspPjYugyT5JeTRl3Jy685Y3PVFVWBNXevV0np8Pk_OFUD0_xo_JbEttS4AsVZC85lkDGjVYwzZ6n0EUCKA.mp4'
    },
    {
      title: language === 'kannada' ? 'ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮ' : 'Community Program',
      duration: '5:30',
      views: '8K',
      likes: '420',
      videoUrl: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/SaveVid.Net_AQNmB5Yg-we9zKzXyL8hczZ6jXEgk6pJEjCIh_l2tKtMdKjwkGEauwg1VtfXZNtvkf27GGR53xsznlaehvNbO0sRSY_xU426K7ZfrGo.mp4'
    },
    {
      title: language === 'kannada' ? 'ತುಳು ಸಂಸ್ಕೃತಿ' : 'Tulu Culture',
      duration: '6:45',
      views: '15K',
      likes: '780',
      videoUrl: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/SaveVid.Net_AQPeCXcPOMGMI6qaJrqQsj9gxtxfugFpCQzSQiuYi1HzXpta0BgPhQJdC61oVCI64s7FeHdQnfpiyveBjcff-LvLcap4V0QVQNeCluI.mp4'
    },
    {
      title: language === 'kannada' ? 'TJB ಹೈಲೈಟ್ಸ್' : 'TJB Highlights',
      duration: '3:15',
      views: '6K',
      likes: '320',
      videoUrl: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Videos/AISIRA%202025%203.mp4'
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

      {/* Tab Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <Camera className="h-5 w-5" />
              <span>{currentContent.photos}</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <Video className="h-5 w-5" />
              <span>{currentContent.videos}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Photos Tab */}
      {activeTab === 'photos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={category.thumbnail} 
                      alt={category.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-sm opacity-90">{category.count} {language === 'kannada' ? 'ಫೋಟೋಗಳು' : 'Photos'}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Camera className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold">
                        <Eye className="h-4 w-4" />
                        <span>{currentContent.viewAll}</span>
                      </button>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors duration-300">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors duration-300">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="relative">
                    <video 
                      className="w-full h-64 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-black/60 px-2 py-1 rounded text-sm">{video.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{video.views} {currentContent.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold">
                        <Play className="h-4 w-4" />
                        <span>{language === 'kannada' ? 'ವೀಡಿಯೊ ನೋಡಿ' : 'Watch Video'}</span>
                      </button>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors duration-300">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'kannada' ? 'ವಿಶೇಷ ಗ್ಯಾಲರಿ' : 'Featured Gallery'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'kannada' ? 'ನಮ್ಮ ಅತ್ಯುತ್ತಮ ಕ್ಷಣಗಳು' : 'Our Best Moments'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large featured image */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/P1.PNG"
                  alt="Featured"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'kannada' ? 'ಐಸಿರ ಮಹೋತ್ಸವ 2024' : 'Aisiri Mahotsava 2024'}
                  </h3>
                  <p className="text-sm opacity-90">
                    {language === 'kannada' ? '20,000+ ಭಾಗವಹಿಸುವವರು' : '20,000+ Participants'}
                  </p>
                </div>
              </div>
            </div>

            {/* Smaller images */}
            {[
              'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p2.PNG',
              'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p3.PNG',
              'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p4.PNG',
              'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p5.PNG',
              'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p6.PNG',
              'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Photos/p7.PNG'
            ].map((imageUrl, index) => (
              <div key={index} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={imageUrl}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'kannada' ? 'ನಿಮ್ಮ ಫೋಟೋಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ' : 'Share Your Photos'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'kannada' 
              ? 'ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ನಿಮ್ಮ ಫೋಟೋಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳನ್ನು ನಮ್ಮೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ'
              : 'Share your photos and videos from our events with us'
            }
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            {language === 'kannada' ? 'ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' : 'Upload Photos'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;