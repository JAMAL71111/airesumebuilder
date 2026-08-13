import React from 'react';

export const ContactUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
      
      <p className="text-lg mb-6">
        Have questions, feedback, or need support with our AI Resume Builder? We would love to hear from you!
      </p>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">Get in Touch</h2>
        <p className="mb-2"><strong>Email:</strong> support@airesumebuilder.com</p>
        <p><strong>Response Time:</strong> We usually respond within 24-48 business hours.</p>
      </div>
    </div>
  );
};
