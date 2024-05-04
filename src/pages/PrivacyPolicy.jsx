// privacyPolicy.jsx

import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-left   ">
      <header>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>Last updated: 5-May-2024</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Lift&Learn ("us", "we", or "our")! We respect your privacy
          and are committed to protecting it through our compliance with this
          policy.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p>
          We collect information from you when you create an account with us
          through Google, Apple, or by signing up directly. This may include
          your name, email address, and contact information.
        </p>
        <p>
          Additionally, when you use our app, we may collect usage data, such as
          the videos you watch and interactions with the app, to improve our
          services.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p>We may use the information we collect from you to:</p>
        <ul className="list-disc list-inside">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>
            Communicate with you, including responding to your inquiries and
            providing updates about our services
          </li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p>
          We may use third-party services such as Apple's subscription service
          to offer additional features or content. Please refer to the
          respective privacy policies of these services for more information on
          how they handle your data.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Security</h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, please be aware that
          no method of transmission over the internet or electronic storage is
          100% secure.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy policy or
          practices, you may contact us at:
        </p>
        <p>Email: pauljprisco@yahoo.com</p>
        <p>Phone: (631) 428-5926</p>
      </section>

      <footer className="my-8">
        <p>
          This privacy policy is effective as of  5-May-2024. Any updates or changes
          to our policy will be posted on this page.
        </p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
