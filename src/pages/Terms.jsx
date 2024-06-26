// termsAndConditions.jsx

import React from "react";

function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-left">
      <header>
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p>Last updated: 5-May-2024</p>
      </header>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Lift&Learn ("us", "we", or "our")! These terms and
          conditions outline the rules and regulations for the use of our app.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">2. Acceptance of Terms</h2>
        <p>
          By accessing or using our app, you agree to be bound by these terms
          and conditions. If you disagree with any part of the terms, you may
          not access the app.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your account and password and for restricting
          access to your account.
        </p>
      </section>
      <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">4.Auto Renewable Subscription</h2>

        <h4 className="text-2xl font-semibold mb-2">
          Step 1: Start Your Free Trial
        </h4>
        <p>
          Get unlimited access to our library of workout videos and plans.
          Choose the plan that fits you best:
        </p>
        <ul>
          <li>
            <strong>Video Access Only</strong>
          </li>
          <ul>
            <li>Monthly Subscription: $2.99</li>
            <li>Yearly Subscription: $19.99</li>
          </ul>
          <li>
            <strong>Full Access {`(Get Access to All Workouts ad Videos)`}</strong>
          </li>
          <ul>
            <li>Monthly Subscription: $9.99</li>
            <li>Yearly Subscription: $99.99</li>
          </ul>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Step 2: Cancel Anytime</h2>
        <p>
          No commitment required. You can cancel your subscription at any time
          with just a few clicks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          Step 3: 3-Day Free Trial
        </h2>
        <p>
          Enjoy a full 3-day trial period to explore all the features of our
          app. After the trial period ends, you will be automatically enrolled
          in your chosen subscription plan. Don't worry, you can still cancel
          anytime during the trial period.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. Intellectual Property
        </h2>
        <p>
          All content provided in the app, including but not limited to text,
          images, videos, and graphics, is the property of Lift&Learn or its
          licensors and is protected by copyright laws.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p>
          We shall not be liable for any direct, indirect, incidental, special,
          or consequential damages arising out of or in any way connected with
          the use of our app.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">7. ELAU Agreement</h2>
        <p>
          The End-User License Agreement (EULA) for Lift&Learn governs your use
          of our app and any software embedded within it. By downloading,
          installing, or using the app, you agree to comply with and be bound by
          the terms of the EULA. The EULA includes provisions regarding the
          license grant, restrictions on use, and limitations of liability,
          among other terms. For a complete understanding of your rights and
          obligations under the EULA, please refer to the full text available
          within the app or on our website.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
        <p>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of the United States of America, without
          regard to its conflict of law provisions.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions or concerns about these terms and
          conditions, you may contact us at:
        </p>
        <p>Email: pauljprisco@yahoo.com</p>
        <p>Phone: (631) 428-5926</p>
      </section>
      <footer className="my-8">
        <p>
          These terms and conditions are effective as of 5-May-2024. Any updates
          or changes to our terms will be posted on this page.
        </p>
      </footer>
    </div>
  );
}

export default TermsAndConditions;
