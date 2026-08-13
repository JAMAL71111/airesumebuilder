import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
      <p className="mb-4">Last updated: August 2026</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">1. Information We Collect</h2>
        <p>We respect your privacy. All information entered into our resume builder is stored locally in your browser session or processed in real-time to generate your resume. We do not store your personal resume data on our permanent servers.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">2. Cookies and Advertising</h2>
        <p>We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use cookies to serve ads based on your prior visits to our website or other websites on the Internet.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">3. Third-Party Links</h2>
        <p>Our website may contain links to external sites. We are not responsible for the content or privacy practices of these third-party websites.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please reach out via our Contact page.</p>
      </section>
    </div>
  );
};
