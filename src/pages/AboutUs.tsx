import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-white">About Us</h1>
      
      <section className="mb-6">
        <p className="text-lg leading-relaxed mb-4">
          Welcome to our AI Resume Builder! We are dedicated to empowering job seekers by providing smart, intuitive, and modern tools to build professional resumes effortlessly.
        </p>
        <p className="text-lg leading-relaxed">
          Our platform leverages cutting-edge technology to help you structure, design, and optimize your career achievements so you can stand out to prospective employers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Our Mission</h2>
        <p>To simplify the job search process by giving everyone access to professional, high-quality resume creation tools completely free and fast.</p>
      </section>
    </div>
  );
};
