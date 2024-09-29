import React from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Privacy = () => {
  return (
    <div>
      <Header />
      <div className="terms-content" style={{ padding: '20px' }}>
      <h1 className="text-3xl font-bold mb-4 text-center mt-20">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4 text-center">Effective Date: 05/28/2024 | Last Updated: 08/07/2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p className="text-gray-500 leading-relaxed">At stopcheating.me, your privacy is of utmost importance to us. We are committed to safeguarding your personal information and ensuring compliance with applicable laws and regulations regarding any data we collect. This Privacy Policy explains how we collect, use, and protect your data when you access our website, stopcheating.me, and other services we provide.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <h3 className="text-lg font-semibold mb-2">Voluntarily Provided Information</h3>
        <p className="text-gray-500 leading-relaxed mb-4">This includes any information you give us directly, such as when you create an account, sign up for our newsletter, or participate in our services and promotions.</p>
        <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
        <p className="text-gray-500 leading-relaxed">This includes information automatically sent by your device when you interact with our website. This data may include your IP address, device type, and interaction history.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Detailed Data Collection</h2>
        <h3 className="text-lg font-semibold mb-2">Log Data</h3>
        <p className="text-gray-500 leading-relaxed mb-4">We collect and store server logs, including your IP address, browser type, the pages you visit, and how long you spend on each page.</p>
        <h3 className="text-lg font-semibold mb-2">Device Data</h3>
        <p className="text-gray-500 leading-relaxed mb-4">Information about your device, including the device type, operating system, and hardware information, is collected to optimize your experience on our platform.</p>
        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
        <p className="text-gray-500 leading-relaxed mb-4">Personal information such as your name, email address, phone number, or mailing address may be collected when you engage with our services.</p>
        <h3 className="text-lg font-semibold mb-2">User-Generated Content</h3>
        <p className="text-gray-500 leading-relaxed mb-4">Any content you create or provide on our platform may be publicly visible and linked to your account or email address.</p>
        <h3 className="text-lg font-semibold mb-2">Transaction Data</h3>
        <p className="text-gray-500 leading-relaxed">We collect records of your interactions and transactions with our services, including analytics data and payment information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Use of Your Information</h2>
        <p className="text-gray-500 leading-relaxed">We use your information to provide and enhance our services, communicate with you, and support our operations. We process this data for legitimate business reasons, ensuring we collect only what is necessary for these purposes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Security of Your Personal Information</h2>
        <p className="text-gray-500 leading-relaxed">We take commercially reasonable measures to protect your personal data from unauthorized access, loss, or theft. However, no online platform can guarantee absolute security.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Retention of Your Personal Information</h2>
        <p className="text-gray-500 leading-relaxed">We will retain your personal information only for as long as necessary to provide our services or comply with legal obligations. Once your data is no longer needed, we will securely delete or anonymize it.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Children’s Privacy</h2>
        <p className="text-gray-500 leading-relaxed">Our services are not intended for users under 13 years old, and we do not knowingly collect information from children under this age.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Disclosure of Personal Information to Third Parties</h2>
        <p className="text-gray-500 leading-relaxed">We may share your information with third parties to facilitate our services, including affiliates, service providers, and law enforcement when required. We do not sell your personal information. Partners we work with include:</p>
        <ul className="list-disc pl-5 text-gray-500">
          <li>Stripe</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <p className="text-gray-500 leading-relaxed">You have rights regarding your personal data, including access, correction, or deletion of your information. To exercise these rights, contact us at <a href="mailto:support@stopcheating.me" className="text-blue-500 hover:underline">support@stopcheating.me</a>.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
        <p className="text-gray-500 leading-relaxed">We may update this Privacy Policy from time to time to reflect changes in our practices. Significant updates will be posted on our website or communicated to you directly.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-500 leading-relaxed">For any questions about this Privacy Policy, please contact us at <a href="mailto:support@stopcheating.me" className="text-blue-500 hover:underline">support@stopcheating.me</a>.</p>
      </section>

      <p className="text-center text-gray-600 text-sm">By using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
