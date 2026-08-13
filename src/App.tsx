import React, { useState } from 'react';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'about' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* Header */}
      <header className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-800/50 backdrop-blur">
        <button onClick={() => setCurrentPage('home')} className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          AI Resume Builder
        </button>
        {currentPage !== 'home' && (
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Back to Builder
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'contact' && <ContactUs />}
        {currentPage === 'home' && (
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">AI Resume Builder</h1>
            <p className="text-gray-400 text-lg">Build your professional resume powered by AI in minutes.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="p-6 border-t border-gray-800 text-center text-sm text-gray-400 bg-gray-950">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact Us</button>
          <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms of Service</button>
        </div>
        <p>© 2026 AI Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
