import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-white">Terms of Service</h1>
      <p className="mb-4">Last updated: August 2026</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">1. Acceptance of Terms</h2>
        <p>By accessing and using this AI Resume Builder, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">2. Use of Service</h2>
        <p>You are responsible for the content you generate using this platform. You agree not to use the builder to create fraudulent, misleading, or harmful documents.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">3. Disclaimer of Warranties</h2>
        <p>The service is provided "as is" without warranties of any kind. We do not guarantee that the generated resumes will secure employment.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">4. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of the new terms.</p>
      </section>
    </div>
  );
};
