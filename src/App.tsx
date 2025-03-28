import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, MessageSquare, Bot, Menu as MenuIcon, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const menuItems = [
    { name: 'Grilled Salmon', price: '$24.99', description: 'Fresh Atlantic salmon with herbs' },
    { name: 'Beef Tenderloin', price: '$29.99', description: 'Premium cut with red wine sauce' },
    { name: 'Vegetarian Pasta', price: '$18.99', description: 'Fresh vegetables in cream sauce' },
    { name: 'Duck Confit', price: '$26.99', description: 'Classic French style duck leg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-orange-600">Sweet Orly-Resto</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-orange-600">Menu</a>
              <a href="#hours" className="text-gray-600 hover:text-orange-600">Hours</a>
              <a href="#feedback" className="text-gray-600 hover:text-orange-600">Feedback</a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#menu" className="block px-3 py-2 text-base font-medium text-gray-700">Menu</a>
            <a href="#hours" className="block px-3 py-2 text-base font-medium text-gray-700">Hours</a>
            <a href="#feedback" className="block px-3 py-2 text-base font-medium text-gray-700">Feedback</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-16"
      >
        <div className="h-[60vh] relative">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Sweet Orly-Resto</h1>
              <p className="text-xl">Experience Culinary Excellence</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-orange-600 font-bold mt-2">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold">Opening Hours</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="text-right font-semibold">Monday - Sunday:</div>
              <div>11:00 AM - 10:00 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Customer Feedback</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <textarea
              className="w-full p-4 border rounded-lg mb-4"
              rows={4}
              placeholder="Share your experience with us..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition">
              Submit Feedback
            </button>
          </div>
        </div>
      </section>

      {/* AI Chat Button */}
      <button className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition">
        <Bot className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;