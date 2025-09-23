import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send, Clock, User, MessageSquare } from 'lucide-react';

function ContactPage({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const content = {
    kannada: {
      title: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      subtitle: 'ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ ತುಳು ಸಂಸ್ಕೃತಿಯನ್ನು ಉಳಿಸಿ',
      
      contactInfo: {
        title: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
        address: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ',
        email: 'info@tjbbengaluru.org',
        phone: '+91 98765 43210',
        hours: 'ಸೋಮವಾರ - ಶುಕ್ರವಾರ: 9:00 AM - 6:00 PM'
      },
      
      form: {
        title: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
        name: 'ನಿಮ್ಮ ಹೆಸರು',
        email: 'ಇಮೇಲ್ ವಿಳಾಸ',
        phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
        subject: 'ವಿಷಯ',
        message: 'ಸಂದೇಶ',
        send: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
        namePlaceholder: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು ನಮೂದಿಸಿ',
        emailPlaceholder: 'your.email@example.com',
        phonePlaceholder: '+91 98765 43210',
        subjectPlaceholder: 'ಸಂದೇಶದ ವಿಷಯ',
        messagePlaceholder: 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...'
      },
      
      socialMedia: {
        title: 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ',
        facebook: 'ಫೇಸ್‌ಬುಕ್‌ನಲ್ಲಿ ಫಾಲೋ ಮಾಡಿ',
        instagram: 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ಫಾಲೋ ಮಾಡಿ',
        youtube: 'ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿ',
        whatsapp: 'ವಾಟ್ಸ್‌ಆಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ'
      }
    },
    
    english: {
      title: 'Contact Us',
      subtitle: 'Join us and help preserve Tulu culture',
      
      contactInfo: {
        title: 'Contact Information',
        address: 'Bengaluru, Karnataka',
        email: 'info@tjbbengaluru.org',
        phone: '+91 98765 43210',
        hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
      },
      
      form: {
        title: 'Send us a Message',
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'your.email@example.com',
        phonePlaceholder: '+91 98765 43210',
        subjectPlaceholder: 'Subject of your message',
        messagePlaceholder: 'Write your message here...'
      },
      
      socialMedia: {
        title: 'Social Media',
        facebook: 'Follow us on Facebook',
        instagram: 'Follow us on Instagram',
        youtube: 'Subscribe on YouTube',
        whatsapp: 'Contact us on WhatsApp'
      }
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

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{currentContent.form.title}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.form.name}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.namePlaceholder}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.form.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.form.phone}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.phonePlaceholder}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={currentContent.form.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.form.message}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={currentContent.form.messagePlaceholder}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{currentContent.form.send}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">{currentContent.contactInfo.title}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'kannada' ? 'ವಿಳಾಸ' : 'Address'}
                      </h3>
                      <p className="text-gray-600">{currentContent.contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'kannada' ? 'ಫೋನ್' : 'Phone'}
                      </h3>
                      <p className="text-gray-600">{currentContent.contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'kannada' ? 'ಇಮೇಲ್' : 'Email'}
                      </h3>
                      <p className="text-gray-600">{currentContent.contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {language === 'kannada' ? 'ಸಮಯ' : 'Hours'}
                      </h3>
                      <p className="text-gray-600">{currentContent.contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.socialMedia.title}</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Facebook</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <span className="text-sm font-medium text-pink-600">Instagram</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Youtube className="h-6 w-6 text-red-600" />
                    <span className="text-sm font-medium text-red-600">YouTube</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-6 w-6 text-green-600" />
                    <span className="text-sm font-medium text-green-600">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'kannada' ? 'ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ' : 'Visit Us'}
            </h2>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg font-medium">
                {language === 'kannada' ? 'ನಕ್ಷೆ ಇಲ್ಲಿ ಲೋಡ್ ಆಗುತ್ತದೆ' : 'Map will load here'}
              </p>
              <p className="text-sm">
                {language === 'kannada' ? 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ' : 'Bengaluru, Karnataka'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;