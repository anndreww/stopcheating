import React from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Terms = () => {
  return (
    <div>
      <Header />
      <div className="terms-content" style={{ padding: '20px' }}>
        <h1 className="text-3xl font-bold mb-4 text-center mt-20">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-4 text-center">Effective Date: 05/28/2024 | Last Updated: 08/07/2024</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Welcome to StopCheating.me</h2>
          <p className="text-gray-500 leading-relaxed">
            These Terms and Conditions ("Terms") govern your access to and use of our website and services (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
          <p className="text-gray-500 leading-relaxed">
            By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use our Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">User Responsibilities</h2>
          <p className="text-gray-500 leading-relaxed">
            You agree to use our Services only for lawful purposes and in compliance with all applicable laws. You must not:
          </p>
          <ul className="list-disc pl-5 text-gray-500">
            <li>Share any personal information of others without their consent.</li>
            <li>Engage in activities that could harm or disrupt our Services.</li>
            <li>Impersonate any individual or entity.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
          <p className="text-gray-500 leading-relaxed">
            All content and features on our Services are the exclusive property of StopCheating.me and protected by copyright and other laws. You may not copy, modify, or distribute any part of our Services without prior written consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Privacy Policy</h2>
          <p className="text-gray-500 leading-relaxed">
            Your use of our Services is governed by our Privacy Policy. By using our Services, you acknowledge that you have read and understood our Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="text-gray-500 leading-relaxed">
            To the maximum extent permitted by law, StopCheating.me is not liable for any indirect or consequential damages arising from your use of our Services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Indemnification</h2>
          <p className="text-gray-500 leading-relaxed">
            You agree to indemnify and hold harmless StopCheating.me and its affiliates from any claims arising from your use of our Services or your violation of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
          <p className="text-gray-500 leading-relaxed">
            These Terms are governed by the laws of your jurisdiction. Any disputes arising from these Terms will be resolved in accordance with applicable laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Changes to the Terms</h2>
          <p className="text-gray-500 leading-relaxed">
            We may modify these Terms at any time. The most current version will be posted on our website. By continuing to use our Services after any changes, you agree to be bound by the revised Terms.
          </p>
        </section>

        <p className="text-center text-gray-600 text-sm">
          By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
