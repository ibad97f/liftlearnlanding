import React from "react";

function DeleteDataRequest() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-left">
      <header>
        <h1 className="text-3xl font-bold mb-4">Request to Delete Your Data</h1>
        <p>Last updated: 5-May-2024</p>
      </header>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          At Lift&Learn, we value your privacy and give you the option to
          request the deletion of your account and personal data. If you wish to
          delete your account, please follow the instructions below.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">
          How to Request Data Deletion
        </h2>
        <p>
          To delete your account and all associated data, please send an email
          to our support team. In your email, include the following details:
        </p>
        <ul className="list-disc list-inside">
          <li>Your full name</li>
          <li>The email address associated with your Lift&Learn account</li>
          <li>
            A statement requesting the deletion of your account and all
            associated data
          </li>
        </ul>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p>Send your data deletion request to the following email address:</p>
        <p className="font-bold">Email: pauljprisco@yahoo.com</p>
        <p>
          We will process your request as soon as possible and notify you once
          your account and data have been deleted. Please note that it may take
          a few days to complete this process.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Important Information</h2>
        <p>
          Once your account and data have been deleted, this action cannot be
          undone. You will lose access to all your workout plans, progress
          tracking, and community interactions. If you have an active
          subscription, it will be canceled as part of the deletion process.
        </p>
        <p>
          If you have any further questions or concerns regarding data deletion,
          feel free to reach out to us at the above email address.
        </p>
      </section>
      <footer className="my-8">
        <p>
          These instructions are effective as of 5-May-2024. Any updates or
          changes to our data deletion process will be posted on this page.
        </p>
      </footer>
    </div>
  );
}

export default DeleteDataRequest;
